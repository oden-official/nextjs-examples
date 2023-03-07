import InputTextTopLabeled from '../../components/atom/input-text-top-labeled';
import styles from './styles.module.scss';
import { useLayer } from './use-layer';

const BasicModule: React.FunctionComponent = () => {
  const {
    email,
    emailErr,
    pw,
    pwConfirm,
    pwErr,
    ok,

    onChangeEmail,
    onChangePw,
    onChangePwConfirm,
  } = useLayer();

  return <div className={styles.main}>
    <div role={'test'}>test</div>
    <InputTextTopLabeled
      label={'이메일'}
      id={'email'}
      className={styles.input}
      inputAttr={{
        value: email,
        onChange: onChangeEmail,
        role: 'email',
      }}
    />
    <div role='emailErr'>{emailErr}</div>
    <InputTextTopLabeled
      label={'비밀번호'}
      id={'pw'}
      className={styles.input}
      inputAttr={{
        value: pw,
        onChange: onChangePw,
        role: 'pw',
      }}
    />
    <InputTextTopLabeled
      label={'비밀번호 확인'}
      id={'pwConfirm'}
      className={styles.input}
      inputAttr={{
        value: pwConfirm,
        onChange: onChangePwConfirm,
        role: 'pwConfirm',
      }}
    />
    <div>{pwErr}</div>
    <div>{ok ? 'ok' : 'disabled'}</div>
  </div>
}

export default BasicModule;
