import { Selector } from 'testcafe';

// eslint-disable-next-line no-unused-expressions
fixture`Main gameplay`.page`../../dist/index.html?endToEndTestMode=true`;

test('Main gameplay', async t => {  
  await t
    .expect(Selector('.passage h1').innerText)
    .eql('whatever')    
});
