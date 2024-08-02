import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  id: number;
  name: string;
};

function getImageUrl(id: number) {
  // const formatId = id.toString().padStart(3, "0");

  return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/s{id}.png';
}

function PokemonCard({ id, name }: Props) {
  return (
    <View style={styles.container}>E
      <Image style={styles.image} source={{ uri: getImageUrl(id) }} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    color: "#fefefe",
  },
    image: {
        width: 75,
        height: 75,
    },
});
export default PokemonCard;