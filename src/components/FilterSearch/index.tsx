import SearchIcon from '@/icons/SearchIcon';
import { cssColor } from '@/utils/color';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';

type FilterSearchProps = TextFieldProps;

const FilterSearch = ({ ...props }: FilterSearchProps) => {
    return (
        <TextField
            fullWidth
            InputProps={{
                startAdornment: (
                    <InputAdornment
                        position="start"
                        sx={{
                            color: cssColor('richblack'),
                        }}
                    >
                        <SearchIcon />
                    </InputAdornment>
                ),
                sx: {
                    borderRadius: 5,
                    height: '44px',
                },
            }}
            {...props}
        />
    );
};

export default FilterSearch;
