import { useToast } from '@/components/ui/use-toast'
import { RoutePathsEnum } from '@/constants/route-paths-enum'
import { auth } from '@/lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const useUser = () => {
  const { toast } = useToast()
  const isAuthenticated = !!localStorage.getItem('isSigned')
  const navigate = useNavigate()

  const signIn = async (email: string, password: string): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      localStorage.setItem('isSigned', 'true')
      navigate(RoutePathsEnum.HOME)
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'E-mail ou senha inválido!',
      })
    }
  }

  const currentUser = auth.currentUser

  return {
    signIn,
    currentUser,
    isAuthenticated
  }
}
