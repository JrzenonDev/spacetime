import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import { styled } from 'nativewind'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import blugBg from './src/assets/bg-blur.png'
import SpacetimeLogo from './src/assets/spacetime-log.svg'
import Stripes from './src/assets/stripes.svg'

export default function App() {
  // por padrão a lib nativewind só estiliza componentes nativos do react-native, por isso usamos essa abordagem abaixo
  const StyledStripes = styled(Stripes)

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  // Só aprensenta algo em tela depois do carregamento das fonts
  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blugBg}
      className="relative flex-1 items-center bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <SpacetimeLogo />

        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua linha do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos da sua jornada e compartilhe (se quiser) com o
            mundo
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-2"
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com ❤️ JrzenonDev
      </Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
