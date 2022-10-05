import Appearance from "../sections/Appearance";
import {describe, expect, test} from '@jest/globals';
import {cleanup, fireEvent, render} from '@testing-library/react';
describe("in appearance", ()=>{
    test("button works", ()=>{
 const {getByTestId}=  render (<Appearance/>);
 const input = getByTestId("appearance_row")
 expect(input).toBeFalsy()
    })
})