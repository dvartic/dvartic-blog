import {
    Button,
    Heading,
    VStack,
    Tooltip,
    Box,
    useColorModeValue,
    useDisclosure,
    Collapse,
    useToast,
} from "@chakra-ui/react";
import { ArrowDownIcon, InfoIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { TfjsInput } from "./tfjs-input";
import * as qna from "@tensorflow-models/qna";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-converter";

interface Props {
    strippedContent: string;
}

export function QNA({ strippedContent }: Props) {
    // State Management for model
    const [model, setModel] = useState<qna.QuestionAndAnswer>();
    const [isModelLoading, setIsModelLoading] = useState(false);

    // Color mode control
    const bgColor = useColorModeValue("blue.50", "blue.800");
    const textColor = useColorModeValue("pink.800", "pink.200");

    // ChakraUI disclosure declaration
    const { isOpen, onToggle } = useDisclosure();

    // ChakraUI toast declaration
    const toast = useToast();

    // Function that loads the TFJS Model. Includes loading states.
    async function loadModel() {
        if (!model) {
            setIsModelLoading(true);
            const loadedModel = await qna.load();
            setModel(loadedModel);
            setIsModelLoading(false);
            onToggle();
            toast({
                title: "Model Loaded",
                id: "loadedModel",
                status: "success",
                duration: 9000,
                isClosable: true,
            });
        } else if (model) {
            onToggle();
        }
    }

    // Logic to change button icon and text.
    function buttonElements() {
        if (model) {
            if (isOpen) {
                return {
                    icon: <ArrowUpIcon />,
                    text: "Close",
                };
            } else if (!isOpen) {
                return {
                    icon: <ArrowDownIcon />,
                    text: "Open",
                };
            }
        } else if (!model) {
            return {
                icon: <ArrowDownIcon />,
                text: "Load Model",
            };
        }
    }

    return (
        <Box w="100%">
            <Box display="flex" w="100%" h={0} position="relative" top={1} right={1}>
                <Box h={0} ml="auto">
                    <Tooltip
                        label="Load a TensorFlow AI/ML Model trained to answer questions in natural language."
                        fontSize="md"
                        hasArrow
                    >
                        <InfoIcon />
                    </Tooltip>
                </Box>
            </Box>
            <VStack w="100%" bg={bgColor} borderTop="2px" borderBottom="2px" borderColor="black" pt={2} pb={2}>
                <Heading mr={8} ml={8} textAlign="center" as="h3" size="lg" color={textColor}>
                    Let an AI answer your questions
                </Heading>
                <Button
                    colorScheme="pink"
                    rightIcon={buttonElements()?.icon}
                    onClick={loadModel}
                    isLoading={isModelLoading}
                    loadingText="Loading"
                >
                    {buttonElements()?.text}
                </Button>
                <Box as={Collapse} in={isOpen} animateOpacity w="100%">
                    <Box w="100%" p={{ base: 2, sm: 2, md: 4, lg: 4, xl: 4, "2xl": 4 }}>
                        <TfjsInput model={model} strippedContent={strippedContent} />
                    </Box>
                </Box>
            </VStack>
        </Box>
    );
}
