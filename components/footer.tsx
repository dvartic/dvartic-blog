import { Text, Box } from "@chakra-ui/react";

interface Props {
    propMt: number,
    propMb: number
}

export function Footer({propMt, propMb}: Props) {
    return (
        <footer>
            <Box mt={propMt} mb={propMb}>
                <Text textAlign='center'>© 2022 Dvartic. All Rights Reserved</Text>
            </Box>
        </footer>
    )
}