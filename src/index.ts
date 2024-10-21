import { PORT } from './config.js';
import app from './app.js';

app.listen(PORT, () => {
    console.log(`Proxy started and istening on port: ${PORT}`);
});