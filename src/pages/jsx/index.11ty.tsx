/** @jsx h */
import h from 'vhtml';

const Header = () => (
  <header>
    <div>Ohayo Nippon</div>
  </header>
);

module.exports = (
  <div>
    <Header />
    <h1>Ohayo Nippon!</h1>
    {[1, 2, 3, 4, 5].map(n => (
      <p>{n} kai me no &lt;p&gt;!</p>
    ))}
  </div>
);
