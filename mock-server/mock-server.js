import apimock from '@ng-apimock/core'
import devInterface from '@ng-apimock/dev-interface'
import express from 'express'
const app = express();

app.set('port', 4000);


apimock.processor.process({
  src: 'mock-server/mocks',
  patterns: {
    mocks: `json_data/*.json`,
    presets: '**/*.preset.json',
  },
  watch: true,
});


app.use(apimock.middleware);
app.use('/dev-interface', express.static(devInterface));

app.listen(app.get('port'), () => {
  console.log('@ng-apimock/core running on port', app.get('port'));
  console.log('@ng-apimock/dev-interface is available under /dev-interface');
});
