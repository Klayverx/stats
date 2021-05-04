import Routes from './routes';

import {ChakraProvider} from '@chakra-ui/react';
import {statsTheme} from './styles/theme';

function App() {
	return (
		<ChakraProvider theme={statsTheme}>
			<Routes />
		</ChakraProvider>
	);
}

export default App;
