import { Image, HStack, Box, Select, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'



function Navbar() {

    const style = {
        width: "80%",
        margin: "auto",
        justifyContent: "space-between",
        padding : "10px"
    }

    const white = {
        color : "white"
    }

    return (
        <div>
            <HStack style={style}>
                <HStack spacing='24px'>
                    <Box w='100px' h='40px' bg=''>
                        <Image
                            boxSize='40px'
                            objectFit='cover'
                            w="100px"
                            src='https://www.ntaskmanager.com/wp-content/uploads/2020/09/wrike-project-management.png.webp'
                            alt='Wrike Logo'
                        />
                    </Box>
                    <Box w='100px' bg='#0c324'>
                        <Select variant='unstyled' placeholder='Product' style={white}>
                            <option value='option1'>Features</option>
                            <option value='option2'>Project Templates</option>
                            <option value='option3'>Apps & Integrations</option>
                            <option value='option3'>Security</option>
                        </Select>
                    </Box>
                    <Box w='90px' bg='#0c324'>
                        <Select variant='unstyled' placeholder='Solutions' style={white}>
                            <option value='option1'>Project Managers</option>
                            <option value='option2'>Marketing</option>
                            <option value='option3'>Creative</option>
                            <option value='option3'>Professional Services</option>
                            <option value='option3'>Product Development</option>
                            <option value='option3'>Business Operations</option>
                        </Select>
                    </Box>
                    <Box w='80px' bg='#0c324' style={white}>
                        Pricing
                    </Box>
                    <Menu>
                        <MenuButton style={white}>
                            Resources
                        </MenuButton>
                        <MenuList>
                            <MenuButton >
                                LEARN MORE
                            </MenuButton>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                            <MenuButton>
                                ABOUT
                            </MenuButton>
                                <MenuItem>Partners</MenuItem>
                                <MenuItem>Company</MenuItem>
                                <MenuItem>Careers</MenuItem>
                                <MenuItem>Newsroom</MenuItem>
                                <MenuItem>Events</MenuItem>
                            <MenuButton >
                                SUPPORT
                            </MenuButton>
                                <MenuItem>Professional Services</MenuItem>
                                <MenuItem>Help Center</MenuItem>
                                <MenuItem>Community</MenuItem>
                                <MenuItem>Interactive Training</MenuItem>
                                <MenuItem>Support Packages</MenuItem>
                        </MenuList>
                    </Menu>
                </HStack>
                <HStack>
                    <Box w='130px' bg='#0c324' style={white}>
                        Contact Sales
                    </Box>
                    <Box w='80px' bg='#0c324' display="flex" justifyContent="center" alignItems="center">
                       <Image w={4} src='https://cdn2.iconfinder.com/data/icons/electronic-line-3/64/global_Earth_language_international_interface_icon0A-512.png' />
                       <p style={white}>EN</p>
                    </Box>
                    <Box w='80px' bg='#0c324' color="rgb(3,207,101)">
                        Log In
                    </Box>
                    <Button backgroundColor="rgb(3,207,101)" >Start For Free</Button>
                </HStack>
            </HStack>
        </div>
    )
}

export default Navbar