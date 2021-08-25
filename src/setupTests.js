// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// https://github.com/mapbox/mapbox-gl-js/issues/9889#issuecomment-664633443
window.URL.createObjectURL = function () { };