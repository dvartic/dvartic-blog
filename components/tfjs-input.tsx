import { Flex, Input, Button, Text, VStack, Box, Badge, Divider, useColorModeValue } from "@chakra-ui/react";
import { useState, useMemo } from "react";
import { MdBolt } from 'react-icons/md';
import * as qna from '@tensorflow-models/qna';

interface Props {
    model: qna.QuestionAndAnswer | undefined,
    strippedContent: string
}

type Answer = {
    text: string,
    startIndex: number,
    endIndex: number,
    score: number,
}[];

interface AnswerElement {
    text?: string;
    startIndex?: number;
    endIndex?: number;
    score?: number;
}

export function TfjsInput({ model, strippedContent }: Props) {

    // State to handle input field, model response and execution.
    const [questionStr, setQuestionStr] = useState('');
    const [answers, setAnswers] = useState<Answer>();
    const [isModelExecuting, setIsModelExecuting] = useState(false);

    // Color mode control
    const fieldsBg = useColorModeValue('white', 'gray.900');
    const placeholderColor = useColorModeValue('gray.600', 'gray.300');
    const borderColor = useColorModeValue('gray.200', 'gray.700')

    // React controlled element, handleChange
    function inputHandleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setQuestionStr(e.target.value)
    }

    // Async function that executes the TFJS Model
    async function executeModel(question: string, passage: string) {
        if (model) {
            const answers = await model.findAnswers(question, passage);
            return answers
        }
    }

    // Helper function to create a slight timeout, to avoid a too quick isLoading state on button. Does not halt model execution.
    function timeout(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Function called when clicking the Run button. Handles states, edge cases and calls model execution.
    async function handleClick() {
        setIsModelExecuting(true);
        const answers = await executeModel(questionStr, strippedContent);
        if (answers && answers[0]) {
            setAnswers(answers);
            await timeout(200);
            setIsModelExecuting(false);
        }
        else {
            setAnswers([{ text: 'The model could not provide a response', startIndex: 0, endIndex: 0, score: 1 }]);
            await timeout(200);
            setIsModelExecuting(false);
        }
    }

    // Function that executes on Enter keydown event on Input field. Calls handleClick function.
    function onKeyDown (event: React.KeyboardEvent<HTMLDivElement>): void {
        // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
        if (event.key === 'Enter') {
          event.preventDefault();
          event.stopPropagation();
          handleClick();
        }
      }

    // Function to process Model answers for UI display.
    function generateResult() {
        if (answers) {
            const result = answers.map((element: AnswerElement, index: number) => {
                if (typeof element.score === 'number' && typeof element.text === 'string') {
                    return (
                        <Box key={index}>
                            {index !== 0 ? <Divider mt={5} mb={5} /> : null}
                            <Text fontWeight='bold'>
                                {`Answer ${index + 1} `}
                                <Badge colorScheme='yellow'>{`Score: ${Math.round((element.score + Number.EPSILON) * 100) / 100}`}</Badge>
                            </Text>
                            <Text>{element.text.charAt(0).toUpperCase() + element.text.slice(1)}</Text>
                        </Box>
                    )
                }
                else {
                    return;
                }
            })
            return result;
        }
        else {
            return;
        }
    }
    const resultValue = useMemo(generateResult, [answers]);

    return (
        <VStack spacing={5}>
            <Flex w='100%' justifyContent='space-around' alignItems='center'>
                <Input placeholder='Your question' _placeholder={{ color: placeholderColor }} bg={fieldsBg} width='auto' flexGrow={1} mr={{ base: 2, sm: 2, md: 4, lg: 4, xl: 4, '2xl': 4 }} value={questionStr} onChange={inputHandleChange} onKeyDown={onKeyDown} />
                <Button colorScheme='pink' rightIcon={<MdBolt />} isLoading={isModelExecuting} loadingText='Executing' onClick={handleClick}>Run</Button>
            </Flex>
            <Box bg={fieldsBg} w='100%' p={4} borderRadius={6} border='1px' borderColor={borderColor} minH={12}>
                {resultValue}
            </Box>
        </VStack>
    )
}