import React, { Component } from 'react';
import './QuestionPage.css';

// material−UIラジオbutton読み込み
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(3),
    },
}));

export default function RadioButtonsGroup() {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');

    const handleChange = event => {
        setValue(event.target.value);
    };



    // 情報入力ページ

    return (
        <div className="topPageDesign">
            <div className="wrapBox">
                <div className="loginOk">
                    <h1 style={{ fontSize: "10px" }}>質問ページ</h1>
                    <div className="menheraData">

                        {/* ココから質問形式 */}
                        <form>
                            <table>
                                <tr>
                                    <th>
                                        <p>性別</p>
                                    </th>
                                    <td>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                                <ul>
                                                    <li>
                                                        <FormControlLabel value="female" control={<Radio />} label="男性" />
                                                    </li>
                                                    <li>
                                                        <FormControlLabel value="male" control={<Radio />} label="女性" />
                                                    </li>
                                                    <li>
                                                        <FormControlLabel value="other" control={<Radio />} label="その他" />
                                                    </li>
                                                </ul>
                                            </RadioGroup>
                                        </FormControl>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}



// export default QuestionPage;