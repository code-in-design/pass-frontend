import { useState } from 'react';
import { Center, Select, Text, VStack } from '@chakra-ui/react';
import Layout from '../common/components/Layout/Layout';
import PostsContainer from '../features/posts/PostsContainer';
import PokemonContainer from '../features/pokemons/PokemonContainer';

export default function Home() {
  /* 첫번째 예제 */
  const [pollingInterval, setPollingInterval] = useState(0);
  const pokemon = ['bulbasaur', 'pikachu', 'ditto', 'bulbasaur'];

  const [index, setIndex] = useState(0);

  return (
    <Layout>
      <Select value={index} onChange={e => setIndex(Number(e.target.value))}>
        <option value={0}>첫번째 예제 (포켓몬)</option>
        <option value={1}>두번째 예제 (게시글)</option>
      </Select>
      {/* 첫번째 예제 */}
      {index === 0 && (
        <VStack>
          <select onChange={change => setPollingInterval(Number(change.target.value))}>
            <option value={0}>Off</option>
            <option value={1000}>1s</option>
            <option value={5000}>5s</option>
          </select>
          {pollingInterval > 0 && <Text>{pollingInterval}밀리초에 한번씩 데이터를 Fetch합니다. 크롬 개발자도구의 네트워크탭을 확인하세요</Text>}
          <div>
            {pokemon.map((poke, index) => (
              <PokemonContainer key={index} name={poke} pollingInterval={pollingInterval} />
            ))}
          </div>
        </VStack>
      )}
      {/* 두번째 예제 */}
      {index === 1 && (
        <VStack>
          <PostsContainer />
        </VStack>
      )}
    </Layout>
  );
}
