import { useState, useEffect } from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import * as Linking from 'expo-linking'

WebBrowser.maybeCompleteAuthSession()

const useLoginGoogle = () => {
    const [accessToken, setAccessToken] = useState(null)
    const [user, setUser] = useState(null)
    const [_request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId:
            '494681511970-mj4r27opcmaj1mrnqqohsrqh085l0g81.apps.googleusercontent.com',
        iosClientId:
            '494681511970-lp00ta5pt3sld8spoag7otfq0t2anl9n.apps.googleusercontent.com',
        androidClientId:
            '494681511970-m9b67crr1v4fkvfu3f3n4r03v8d3888m.apps.googleusercontent.com',
    })

    const googleAuthURL = Linking.createURL(
        'https://www.googleapis.com/userinfo/v2/me'
    )

    async function fetchUserInfo() {
        const response = await fetch(googleAuthURL, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })

        const userInfo = await response.json()
        setUser(userInfo)
    }

    useEffect(() => {
        console.log(response)
        if (response?.type === 'success') {
            setAccessToken(response.authentication.accessToken)
            accessToken && fetchUserInfo()
        }
    }, [response, accessToken])

    return {
        user,
        accessToken,
        promptAsync,
    }
}

export default useLoginGoogle
