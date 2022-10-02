import {
    FormControl,
    Input,
    Box,
    Image,
    Button,
    Center,
    ButtonGroup,
    Text,
    Square,
    Flex
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContextProvider } from '../PrivateContext';



function Login() {

    const [isEmailExiset, setIsEmailExist] = useState(false);
    const { setReloadState } = useContext(LoginContextProvider)
    const [cred, setCred] = useState({
        email: '',
        password: ''
    })
    const navigator = useNavigate()

    const handleChange = (e) => {
        const { value, name } = e.target;
        setCred({
            ...cred,
            [name]: value
        })
    }

    const handleNextClick = () => {
        if (!cred.email) {
            return;
        }
        if (!cred.password) {
            setIsEmailExist(true)
            return;
        }
        localStorage.setItem('cred', JSON.stringify(cred));
        setReloadState(e => !e)
        navigator('/')
    }

    return (
        <div>
            <Box w="35%" margin="auto" marginTop="100px" padding="40px" borderWidth='1px'>
                <Image w="30%" margin="auto" padding={4} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Wrike_Logo.svg/2560px-Wrike_Logo.svg.png" />
                <FormControl isRequired>
                    {!isEmailExiset && <Input value={cred?.email} name={'email'} type="email" placeholder='Email or Corporate Id' onChange={handleChange} marginTop={5} p="20px" />}
                    {isEmailExiset && <Input value={cred?.password} name={'password'} type="password" placeholder='Password' onChange={handleChange} marginTop={5} p="20px" />}
                    <Button onClick={handleNextClick} w="100%" bg="rgb(68,135,255)" color="white" marginTop={5} p="20px">{isEmailExiset ? 'Login' : 'Next'}</Button>
                    <Center color='rgb(68,135,255)' marginTop={8}>
                        Forgot Password ?
                    </Center>
                    <Center color="grey" marginTop={45}>
                        or Log in with
                    </Center>
                    <Box>
                        <ButtonGroup gap='5' marginTop={2} >
                            <Button bg="rgb(255,255,255)" border=".5px solid">
                                <Image w={6} src="https://staffordonline.org/wp-content/uploads/2019/01/Google.jpg" />
                                Google
                            </Button>
                            <Button bg="rgb(255,255,255)" border=".5px solid">
                                <Image w={6} src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" />
                                Sign in With Apple
                            </Button>
                            <Button bg="rgb(255,255,255)" border=".5px solid">
                                <Image w={6} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/768px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png" />
                                Office
                            </Button>
                        </ButtonGroup>
                    </Box>
                </FormControl>
            </Box>
            <Center marginTop={45}>
                Don't have a Wrike account yet? <Text color='rgb(68,135,255)'> Get started now</Text>
            </Center>
            <Box borderTop="1px solid" margin="auto" padding="5px" marginTop="18vh" color='rgb(68,135,255)' fontSize="12px" paddingLeft="15px" >
                <Flex padding="5px" paddingLeft="15px" >
                    <Center paddingLeft="15px">
                        <Text>Have multiple accounts? Login here</Text>
                    </Center>
                    <Square paddingLeft="15px">
                        <Text>Log in with one-TimePassword</Text>
                    </Square>
                    <Box paddingLeft="15px">
                        <Text>Get in touch</Text>
                    </Box>
                    <Box paddingLeft="15px">
                        <Text>Wrike Help Center</Text>
                    </Box>
                    <Box paddingLeft="15px">
                        <Text color="grey">Copyright ©2006-2022 Wrike, Inc. All rights reserved. Patented.</Text>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}

export default Login