import { Container, Content } from './styles';
import Input  from './components/Input';
import Button from './components/Button';

const App = () => {
  return (
    <Container>
      <Content>
        <Input />
        <Button />
        Ola mundo!
      </Content>
    </Container>
  );
}

export default App;
