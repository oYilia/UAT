import { Selector } from 'testcafe';
import roles  from '../base/login'
import { SendText } from '../action/send_post'

fixture `send_post`
    .page `https://develop.fiji.gliprc.com/unified-login`.beforeEach(async t => {
        const role = roles['Chris_sandbox']['Yilia Hong'];
        await t.useRole(role);
    });

test('send post', async() => {
    await SendText("Team RingCentral Inc.", "" );
});
