import { useState } from 'react';
import { THUMNAIL_SIZES } from '../constants';
import useThumbs from '../hooks/useThumbs';

const Form = () => {
  // const { setId } = useId;
  const [url, setUrl] = useState<string>('');

  const { data, loading } = useThumbs(url);

  const onChangehandler = (e: any) => {
    setUrl(e.target.value);
  };

  return (
    <>
      <form>
        <input
          type='text'
          name='url'
          placeholder='유튜브 URL을 입력하세요.'
          onChange={onChangehandler}
        />
      </form>
      {!loading && (
        <>
          {data?.map((thumbnail, i) => (
            <figure key={Math.random()}>
              <img src={thumbnail} />
              <figcaption>{`${THUMNAIL_SIZES[i]}.jpg`}</figcaption>
            </figure>
          ))}
        </>
      )}
    </>
  );
};

export default Form;
