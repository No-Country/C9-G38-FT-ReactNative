import { useState, useEffect } from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { GOOGLE_LOGIN_AUTH } from '../constants/endpoints'
import { useAuthStore } from '../store/authStore'

WebBrowser.maybeCompleteAuthSession()

const useLoginGoogle = () => {
    const [accessToken, setAccessToken] = useState(null)
    const [user, setUser] = useState(null)
    const setGoogleUserToken = useAuthStore((store) => store.setAuth)

    const [_, googleResponse, googleAuth] = Google.useAuthRequest({
        expoClientId:
            '494681511970-mj4r27opcmaj1mrnqqohsrqh085l0g81.apps.googleusercontent.com',
        iosClientId:
            '494681511970-lp00ta5pt3sld8spoag7otfq0t2anl9n.apps.googleusercontent.com',
        androidClientId:
            '494681511970-m9b67crr1v4fkvfu3f3n4r03v8d3888m.apps.googleusercontent.com',
    })

    const googleLogin = async (accessToken) => {
        try {
            const response = await fetch(GOOGLE_LOGIN_AUTH, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })

            const data = response.json()

            return data
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        async function loginUserWithGoogle(accessToken) {
            try {
                const user = await googleLogin(accessToken)

                setUser(user)
            } catch (error) {
                console.error(error)
            }
        }

        if (googleResponse?.type === 'success') {
            const { accessToken } = googleResponse.authentication

            setAccessToken(accessToken)
            loginUserWithGoogle(accessToken)
            setGoogleUserToken(accessToken)
        }
    }, [googleResponse])

    return {
        user,
        accessToken,
        googleAuth,
    }
}

export default useLoginGoogle
