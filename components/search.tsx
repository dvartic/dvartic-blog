import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

interface Props {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchStr: string;
}

export function Search({ handleChange, searchStr }: Props) {
    return (
        <Box w="90%" maxWidth="1200px" mt={14} mb={14} ml="auto" mr="auto">
            <Box w={["2xs", "2xs", "xs", "xs", "sm"]} ml="auto" mr={["auto", "0px"]}>
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <Search2Icon />
                    </InputLeftElement>
                    <Input placeholder="Filter" size="md" variant="outline" value={searchStr} onChange={handleChange} />
                </InputGroup>
            </Box>
        </Box>
    );
}
