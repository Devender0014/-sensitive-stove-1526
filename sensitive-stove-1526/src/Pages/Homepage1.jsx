import { Heading,Text,Input,Box, Button, Flex, Image, Center } from "@chakra-ui/react";

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
            <Box marginTop="50px" backgroundColor="rgb(24,31,56)" paddingTop="20px">
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
            <Box backgroundColor="rgb(24,31,56)">
                <Flex width="90%" margin="auto" paddingTop="100px" >
                    <Box width="50%" paddingTop="200px">
                        <Text padding="20px">COLLABORATE 2022 IS COMING!</Text>
                        <Heading padding="20px">Register now for the ultimate work management event</Heading>
                        <Text padding="20px">Learn how companies are increasing productivity and finding the freedom to focus on their most meaningful work. Enjoy hands-on product sessions and customer-led stories that show how teams are rising above hidden complexities to do their most purposeful work.</Text>
                        <Button padding="20px" color="rgb(3,207,101)" background="none" size="lg" >Register now </Button>
                    </Box>
                    <Box width="50%">
                        <Image src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=2/tp/storage/uploads/1d9d7a6d-cfdb-4b49-bbae-db76ed466519/collaborate-hp-promo.png"/>
                    </Box>
                </Flex>
            </Box>
            <Box paddingTop="100px" backgroundColor="rgb(4,69,77)" paddingBottom="100px">
                    <Center fontSize="5xl" paddingBottom="40px" textAlign="center" as="b">Stories from our customers</Center>
                <Flex width="90%" margin="auto">
                    <Box width="50%">
                        <Image w="500px" borderRadius="50% 0 0 0"  src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=496,dpr=2/tp/storage/uploads/8217f185-4a7a-4743-a531-15b6875d0c67/rebrand-quote-slider-image-walmart-canada-2x.jpg"/>
                    </Box>
                    <Box width="50%">
                        
                        <Text fontSize="4xl" >
                            "Everyone is in wrike daily, we've built one story nd one version of the truth. And that is a game changer for us. Now we do our project reviews in Wrike: no more need for presentations, word documents or any of the additional work."
                        </Text >
                        <Flex>
                            <Text fontSize="xl" padding="5px">Francis Lalonde, Vice President of Transportation, Walmart canada </Text>
                            <Image src="https://web-static.wrike.com/tp/storage/uploads/d114cd4b-e55a-4f16-a017-4f64bde5d985/rebrand-quote-logo-walmart-canada-white.svg"/>
                        </Flex>
                        <Button color="rgb(3,207,101)" background="none" fontSize="lg">Watch Walmart Canada's story</Button>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}

export default Homepage1