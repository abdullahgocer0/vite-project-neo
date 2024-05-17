
import { PaletteMode } from '@mui/material';
import IconButton from '@mui/material/IconButton';


interface ToggleColorModeProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function ToggleColorMode({  toggleColorMode }: ToggleColorModeProps) {
  return (
    <IconButton
      onClick={toggleColorMode}
      color="primary"
      aria-label="Theme toggle button"
    >
      {/* {mode === 'dark' ? (
        <WbSunnyRoundedIcon fontSize="small" />
      ) : (
        <ModeNightRoundedIcon fontSize="small" />
      )} */}
    </IconButton>
  );
}

export default ToggleColorMode;
