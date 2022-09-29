import { Flex, Box, Spacer, VStack, Text, Image } from "@chakra-ui/react"



function Footer() {

    const style = {
        backgroundColor : "rgb(12,50,69)",
        padding : "10px",
        color : "white"
    }


    return (
        <div style={style}>
            <Flex w="90%" margin="auto" >
                <Box w='100px' >
                    <VStack alignItems="flex-start">
                        <Text fontSize='lg' as='b'>Product</Text>
                        <Text fontSize='md'>Product tour</Text>
                        <Text fontSize='md'>Pricing</Text>
                        <Text fontSize='md'>Templates</Text>
                        <Text fontSize='md'>Apps & Integrations</Text>
                        <Text fontSize='md'>Task management</Text>
                        <Text fontSize='md'>Gantt charts</Text>
                        <Text fontSize='md'>Wrike Status</Text>
                        <Text fontSize='md'>Security</Text>
                        <Text fontSize='md'>CA Notice at Collection</Text>
                        <Text fontSize='md'>API</Text>
                    </VStack>
                </Box>
                <Spacer />
                <Box w='100px' >
                    <VStack alignItems="flex-start">
                        <Text fontSize='lg' as='b'>Solutions</Text>
                        <Text fontSize='md'>All Teams</Text>
                        <Text fontSize='md'>Marketing</Text>
                        <Text fontSize='md'>Creative</Text>
                        <Text fontSize='md'>Project Management</Text>
                        <Text fontSize='md'>Product Development</Text>
                        <Text fontSize='md'>Business Operations</Text>
                        <Text fontSize='md'>Professional Services</Text>
                        <Text fontSize='md'>Students</Text>
                    </VStack>
                </Box>
                <Spacer />
                <Box w='100px' >
                    <VStack alignItems="flex-start">
                        <Text fontSize='lg' as='b'>Resources</Text>
                        <Text fontSize='md'>Help Center</Text>
                        <Text fontSize='md'>Community</Text>
                        <Text fontSize='md'>Webinars</Text>
                        <Text fontSize='md'>Interactive Training</Text>
                        <Text fontSize='md'>Support</Text>
                        <Text fontSize='md'>Google project management tools</Text>
                    </VStack>
                </Box>
                <Spacer />
                <Box w='100px' >
                    <VStack alignItems="flex-start">
                        <Text fontSize='lg' as='b'>Company</Text>
                        <Text fontSize='md'>About Us</Text>
                        <Text fontSize='md'>Careers</Text>
                        <Text fontSize='md'>Our Customers</Text>
                        <Text fontSize='md'>Blog</Text>
                        <Text fontSize='md'>Events</Text>
                        <Text fontSize='md'>Newsroom</Text>
                        <Text fontSize='md'>Partner Program</Text>
                        <Text fontSize='md'>User Conference</Text>
                        <Text fontSize='md'>Contact Us</Text>
                    </VStack>
                </Box>
                <Spacer />
                <Box w='470px' >
                    <VStack alignItems="flex-start">
                        <Text fontSize='lg' as='b' >Guides</Text>
                        <Flex >
                            <Box w='150px'>
                                <VStack alignItems="flex-start">
                                    <Text fontSize='md'>Project Management Guide</Text>
                                    <Text fontSize='md'>Kanban Guide</Text>
                                    <Text fontSize='md' as='u'>Show More</Text>
                                </VStack>
                            </Box>
                            <Spacer/>
                            <Box w='150px'marginLeft="40px" >
                                <VStack alignItems="flex-start">
                                    <Text fontSize='md'>Professional Services Guide</Text>
                                    <Text fontSize='md'>Agile Guide</Text>
                                </VStack>
                            </Box>
                        </Flex>
                    </VStack>
                    <Box marginTop="20px">
                        <Text as='b' fontSize='lg'>Latest in Wrike Blog</Text>
                        <Text>Wrike vs. Asana: Compare Asana Alternatives</Text>
                        <Text>Performance Review: Templates, Tips, & More</Text>
                        <Text>11 Resources to Help You Build a Marketing Team That Can Weather Any Storm</Text>
                        <Text>Wrike vs. Trello: Which Project Management Software Is Best?</Text>
                        <Text>From Nanny Shares To Daycare: How Three Wrike Parents Make It Work</Text>
                        <Text>How Work Management Software Can Help Solve Quiet Quitting</Text>
                        <Text>SMART Goal Setting: How To Write Your Team's SMART Goals</Text>
                    </Box>
                </Box>
            </Flex>
            <Flex w="90%" margin="auto" marginTop="40px">
                <Image w={40} margin="10px" src="https://web-static.wrike.com/tp/static/assets/img/footer/apple_en.svg"/>
                <Image w={40} src="https://web-static.wrike.com/tp/static/assets/img/footer/google_play_en.svg"/>
                <Spacer/>
                <Image w={8} h={8} padding="5px" src="https://cdn-icons-png.flaticon.com/512/81/81609.png"/>
                <Image w={8} h={8} padding="5px"  src="https://cdn-icons-png.flaticon.com/512/44/44646.png"/>
                <Image w={8} h={8} padding="5px"  src="https://cdn.icon-icons.com/icons2/2389/PNG/512/linkedin_in_logo_icon_145103.png"/>
                <Image w={8} h={8} padding="5px"  src="https://cdn-icons-png.flaticon.com/512/48/48968.png"/>
                <Image w={8} h={8}  padding="5px" src="https://cdn-icons-png.flaticon.com/512/87/87390.png"/>
                <Spacer/>
                <VStack>
                    <Text>©2006-2022 Wrike, Inc. All rights reserved. Patented.</Text>
                    <Text>Privacy Policy. Terms of Service. Cookie Preferences</Text>
                </VStack>
            </Flex>
        </div>
    )
}

export default Footer