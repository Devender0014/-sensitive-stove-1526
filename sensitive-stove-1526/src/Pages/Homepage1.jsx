import { Heading,Text,Input,Box, Button, Flex, Image, Center, Spacer } from "@chakra-ui/react";

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
            <Box paddingTop="50px">
                <Box width="60%" margin="auto" textAlign="center">
                    <Center fontSize="5xl">Transform the way your teams work</Center>
                    <Center fontSize="lg" >Empower your teams to do the best work of their lives with 360° visibility, true cross-departmental collaboration, and powerful automation.</Center>
                </Box>
                <Flex width="90%" margin="auto" paddingTop="50px">
                    <Box width="50%" padding="10px" fontSize="xl">
                        <Text padding="10px" fontSize="3xl">WORK YOUR WAY</Text>
                        <Text padding="10px">Tailored to your needs, not the other way around</Text>
                        <Text padding="10px">Wrike is customizable to perfectly suit your organization. Work your way with easily configurable dashboards and workflows, as well as team-specific custom item types and automation that streamlines processes. Nothing else offers this level of no-code automation and versatility.</Text>
                    </Box>
                    <Box width="50%">
                        <Image src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=2/tp/storage/uploads/12a1d600-4590-4405-b2e4-750d051b0f62/table-view2x.png"/>
                    </Box>
                </Flex>
            </Box>
            <Box>
                <Box width="90%" border="1px solid rgb(3,207,101)" margin="auto" padding="50px 150px">
                    <Text fontSize="4xl">Having a single source of truth for information and communication makes it easy for leadership to stay in the loop or get a new team member up to speed quickly. It mitigates the risk of tasks falling through the cracks.</Text>
                    <Flex>
                            <Text fontSize="xl" paddingTop="30px">Shaun Carlson, Director of R&D and Continuous Innovation, Arvig</Text>
                            <Spacer/>
                            <Image src="https://web-static.wrike.com/tp/storage/uploads/61849d24-f6b7-44ba-b2b9-eb4951735566/rebrand-quote-logo-arvig-white.svg"/>
                    </Flex>
                </Box>
            </Box>
            <Box>
                <Flex width="90%" margin="auto" paddingTop="50px">
                    <Box width="50%" padding="10px" fontSize="xl">
                        <Text padding="10px" fontSize="3xl">COLLABORATE ACROSS TEAMS</Text>
                        <Text padding="10px">Work in real-time across your entire org</Text>
                        <Text padding="10px">Eliminate endless email threads, needless meetings, and copious check-ins with real-time commenting and notifications, live editing, dynamic reports, and more. Best of all? Information can easily be shared with all stakeholders at any time.</Text>
                    </Box>
                    <Box width="50%">
                        <Image src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=2/tp/storage/uploads/rebrand-screenshot-commenting-2x.png"/>
                    </Box>
                </Flex>
            </Box>
            <Box paddingTop="50px">
                <Box width="90%" border="1px solid rgb(3,207,101)" margin="auto" padding="50px 150px">
                    <Text fontSize="4xl">Collaboration has improved dramatically, not because the people have changed — we've always wanted to help, but now we have a tool that allows us to figure out how we can help each other better.</Text>
                    <Flex>
                            <Text fontSize="xl" paddingTop="30px">Katy Scott, Digital Learning Manager, Monterey Bay Aquarium</Text>
                            <Spacer/>
                            <Image src="https://web-static.wrike.com/tp/storage/uploads/228f9048-e5e9-4f82-904f-47201014d226/rebrand-quote-logo-white-monterey-bay.svg"/>
                    </Flex>
                </Box>
            </Box>
            <Box>
                <Flex width="90%" margin="auto" paddingTop="50px">
                    <Box width="50%" padding="10px" fontSize="xl">
                        <Text padding="10px" fontSize="3xl">GET END-TO-END VISIBILITY</Text>
                        <Text padding="10px">Always be prepared for what’s next</Text>
                        <Text padding="10px">Get real-time updates and see potential roadblocks before they happen. Drill down to individual tasks or zoom out for a holistic view of everything in your portfolio. With Wrike, you’ll always have what you need to deliver more projects, faster.</Text>
                    </Box>
                    <Box width="50%">
                        <Image src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=2/tp/storage/uploads/rebrand-screenshot-kanban-and-gantt-2x.png"/>
                    </Box>
                </Flex>
            </Box>
            <Box paddingTop="50px">
                <Box width="90%" border="1px solid rgb(3,207,101)" margin="auto" padding="50px 150px">
                    <Text fontSize="4xl">We work faster, update key dates for deliverables much more quickly, and eliminate human error. We’ve likely saved around 200 or more hours per year in our launch prep.</Text>
                    <Flex>
                            <Text fontSize="xl" paddingTop="30px">Brynne Roberts, Director of Creative Operations, Fitbit</Text>
                            <Spacer/>
                            <Image src="https://web-static.wrike.com/tp/storage/uploads/94121894-d068-4a87-aea5-7f6743ab1d8a/rebrand-quote-logo-fitbit-white.svg"/>
                    </Flex>
                </Box>
            </Box>
            <Box>
                <Flex width="90%" margin="auto" paddingTop="50px">
                    <Box width="50%" padding="10px" fontSize="xl">
                        <Text padding="10px" fontSize="3xl">BE THE MASTER OF YOUR DATA</Text>
                        <Text padding="10px">Take advantage of our industry-leading security</Text>
                        <Text padding="10px">Get all the advantages of a cloud-based work management platform with the security you’d expect from an on-premises system. Our enterprise-grade security is unparalleled, and gives you full control over your data.</Text>
                    </Box>
                    <Box width="50%">
                        <Image src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=2/tp/storage/uploads/4c45aeee-5c8b-40c5-bb1d-a978c0c73df5/rebrand-screenshot-lock-scheme-dark-2x.png"/>
                    </Box>
                </Flex>
            </Box>
            <Box paddingTop="50px">
                <Box width="90%" border="1px solid rgb(3,207,101)" margin="auto" padding="50px 150px">
                    <Text fontSize="4xl">I am so glad that we have Wrike as opposed to having information in hundreds of spreadsheets going around thousands of emails or worse, just in people’s heads.</Text>
                    <Flex>
                            <Text fontSize="xl" paddingTop="30px">Dave Rorke, Project Officer, University of New South Wales</Text>
                            <Spacer/>
                            <Image src="https://web-static.wrike.com/tp/storage/uploads/c61fe5bc-5175-46f9-a4f9-3eb299c31689/rebrand-quote-logo-white-unsw-sydney.svg"/>
                    </Flex>
                </Box>
            </Box>
            <Box>
                <Box width="40%" margin="auto" textAlign="center" paddingTop="100px">
                        <Text fontSize="4xl" paddingTop="10px">Unlock the possibilities</Text>
                        <Text paddingTop="10px">Work As One™.</Text>
                        <Text paddingTop="10px">Experience effortless collaboration with Wrike’s work management platform.</Text>
                        <Input placeholder="Enter your bussiness email" width="300px" padding="10px"/>
                        <Button width="150px" margin="30px" backgroundColor="rgb(3,207,101)" color="white" padding="10px" fontSize="xl">Try for free</Button>
                </Box>

            </Box>
            
        </div>
    )
}

export default Homepage1