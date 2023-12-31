import { Application } from '../declarations';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.use('/version', (req: any, res: any) => {
    res.send('1.0.0');
  });
}
