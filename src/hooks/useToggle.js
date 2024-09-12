import {useState} from 'react';

const useToggle = (initialValue = false) => {
  const [toggle, setToggle] = useState(initialValue);

  const changeToggle = () => {
    setToggle(!toggle);
  };

  return [toggle, changeToggle];
};

export default useToggle;
