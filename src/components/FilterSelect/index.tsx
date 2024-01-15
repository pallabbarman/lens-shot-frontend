import { MenuItem, TextField } from '@mui/material';

const FilterSelect = () => {
    return (
        <TextField
            select
            label="Select"
            helperText="Please select your currency"
        >
            <MenuItem value={''}>abc</MenuItem>
        </TextField>
    );
};

export default FilterSelect;
