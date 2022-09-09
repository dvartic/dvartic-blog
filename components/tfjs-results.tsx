import { Box, Text, Badge, Divider, forwardRef } from "@chakra-ui/react";
import { motion } from 'framer-motion';

interface AnswerElement {
    text?: string;
    startIndex?: number;
    endIndex?: number;
    score?: number;
}

interface Props {
    answers: {
        text: string,
        startIndex: number,
        endIndex: number,
        score: number,
    }[];
    hasSuccessful: boolean;
}

export const TfjsResults = forwardRef(({ answers, hasSuccessful }: Props, ref) => {
    // Function to process Model answers for UI display.
    function generateResult() {
        if (hasSuccessful) {
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
            })
            return result;
        }
        else if (!hasSuccessful) {
            const result = answers.map((element: AnswerElement, index: number) => {
                if (typeof element.score === 'number' && typeof element.text === 'string') {
                    return (
                        <Box
                            key={index}
                        >
                            <Text fontStyle='italic' color='red'>{element.text.charAt(0).toUpperCase() + element.text.slice(1)}</Text>
                        </Box>
                    )
                }
            })
            return result;
        }
    }

    return (
        <Box ref={ref} opacity={0}>
            {generateResult()}
        </Box>
    )
})

export const TfjsResultsMotion = motion(TfjsResults);