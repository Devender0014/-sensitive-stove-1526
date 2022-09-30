import { Heading,Text,Input,Box, Button, Flex, Image } from "@chakra-ui/react";

function Homepage1(){

const style = {
    backgroundColor : "rgb(12,50,69)",
    color : "white",
    paddingTop : "50px"
}

    return (
        <div style={style}>
            <Box width="50%" margin="auto" textAlign="center">
                <Heading fontSize='5xl' >Remove barriers, find clarity, exceed goals</Heading>
                <Text fontSize='xl'>Anything is possible with the most powerful work management software at your fingertips.</Text>
                <Flex marginTop="50px" alignItems="center" justifyContent="center">
                    <Input placeholder='enter your business email' size='lg' width="300px" margin="10px"/>
                    <Button backgroundColor="rgb(3,207,101)" size="lg">Try For Free</Button>
                </Flex>
                <Text color="rgb(3,207,101)">Our Story</Text>
            </Box>
            <Box marginTop="50px" backgroundColor="rgb(24,31,56)">
                <Text textAlign="center" marginBottom="10px">TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE</Text>
                <Flex width="90%" margin="auto" justifyContent="space-evenly">
                    <Image src="https://web-static.wrike.com/tp/storage/uploads/5ce76ec8-86e1-42ce-9a8e-acafa4cdd82e/1440-logoroll-logo-white-google.svg"/>
                    <Image src="https://web-static.wrike.com/tp/storage/uploads/17e81db2-0802-47a7-8037-8cb11d166299/1440-logoroll-logo-syneos-white.svg"/>
                    <Image src="https://web-static.wrike.com/tp/storage/uploads/5ce76ec8-86e1-42ce-9a8e-acafa4cdd82e/1440-logoroll-logo-lyft-white.svg"/>
                    <Image src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-white-siemens.svg"/>
                    <Image src="https://web-static.wrike.com/tp/storage/uploads/473c0f49-59e8-4422-89d7-184c44f362cf/1440-logoroll-logo-nickelodeon-white.svg"/>
                    <Image src="https://web-static.wrike.com/tp/storage/uploads/5ce76ec8-86e1-42ce-9a8e-acafa4cdd82e/1440-logoroll-logo-white-oglivy.svg"/>
                    <Image src="https://web-static.wrike.com/tp/storage/uploads/5ce76ec8-86e1-42ce-9a8e-acafa4cdd82e/1440-logoroll-logo-snowflake-white.svg"/>
                </Flex>
            </Box>
            <Box>
                <Flex width="90%" margin="auto">
                    <Box width="50%">
                        <Text>COLLABORATE 2022 IS COMING!</Text>
                        <Heading>Register now for the ultimate work management event</Heading>
                        <Text>Learn how companies are increasing productivity and finding the freedom to focus on their most meaningful work. Enjoy hands-on product sessions and customer-led stories that show how teams are rising above hidden complexities to do their most purposeful work.</Text>
                        <Button>Register now </Button>
                    </Box>
                    <Box width="50%">
                        <Image src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=2/tp/storage/uploads/1d9d7a6d-cfdb-4b49-bbae-db76ed466519/collaborate-hp-promo.png"/>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}

export default Homepage1