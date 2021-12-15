import { useState } from "react";
import { IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";


const VisibilityPage = (props) => {
    const [showPassWord, setPassWord] = useState(true);

    const handleClickShowPassword = () => {
        setPassWord(!showPassWord);
      };
      const handleMouseDownPassword = () => {
        setPassWord(!showPassWord);
      };

    return(
        <div>
              InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassWord ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
        </div>
    )
}

export default VisibilityPage;