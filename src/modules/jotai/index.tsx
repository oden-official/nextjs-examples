import { Provider } from "jotai";
import { useLayer } from "./use-layer";
import styles from './styles.module.scss';
import Item from "src/modules/jotai/components/item";

const Jotai1Module: React.FunctionComponent = () => {
  const {
    items,
    email,
    username,
  } = useLayer();
  return <main className={styles.main}>
    <header>jotai1 {email} {username}</header>
    <div>
      <h1>linked</h1>
      {items.map((c) => <Item key={c.key} {...{ h2: c.h2, atom: c.atom}} />)}
    </div>
    <div>
      <h1>seperate</h1>
      {items.map((c) => <Provider key={c.key}>
        <Item {...{ h2: c.h2, atom: c.atom}} />
      </Provider>
      )}
    </div>
  </main>
}

export default Jotai1Module;
