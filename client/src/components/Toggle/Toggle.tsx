import { useMemo, useState } from 'react';
import { IconContext } from 'react-icons';
import { IoMenu, IoClose } from 'react-icons/io5';
import './Toggle.scss';

function Toggle(): JSX.Element {
  const [isActivated, setIsActivated] = useState(false);
  const value = useMemo(
    () => ({ className: isActivated ? 'icon-close' : 'icon-menu' }),
    [isActivated]
  );
  return (
    <div
      className="toggle"
      role="menuitem"
      tabIndex={0}
      onClick={() => setIsActivated(!isActivated)}
      onKeyPress={() => setIsActivated(!isActivated)}
    >
      <IconContext.Provider value={value}>
        {isActivated ? <IoClose /> : <IoMenu />}
      </IconContext.Provider>
    </div>
  );
}

export default Toggle;
