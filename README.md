# XXL FE test

Welcome! Your mission is as follows.

## Assignment

Build a React component that displays whether a specific XXL warehouse is currently open or closed.

You are free to choose whether to work in a local IDE or an online based one, whether you want to use TypeScript or JavaScript, and how the component will look. A mockup is provided as an example. You can also fetch data anyway you want, e.g. fetch, Axios, react-query or even XMLHttpRequest...

## Let's get started

Navigate to [https://www.xxl.se/store-finder](https://www.xxl.se/store-finder) to browse the list of XXL warehouses in Sweden. Pick any store, maybe your "local" or closest store?

## API

The underlying API that is used on this page is

[https://api.xxlsports.com/content-api-v5/datasets/xxl-se/stores/](https://api.xxlsports.com/content-api-v5/datasets/xxl-se/stores/) - go ahead, try a GET request in a new browser tab, cURL, Postman or however you wish! (This particular API exposes only public data and hence no API tokens or security is enforced)

Find your store and note the `id` attribute which you can use to request specifically only the data for a single store, by ending the API URL with that id as a suffix.

![Excerpt from Swagger API docs](https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBei94QWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--bf1d86ee3d810bd686152a1e09e6531014281b22/swagger.png 'Excerpt from Swagger API docs')

## Hints

To indicate whether the store is currently open or closed, you will need to combine the opening hours data from the API with the actual current weekday and time. You are free to use the native [Date API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) or any datetime library you want.

In `date-utils.ts`, a function is provided to return the name of the current day in English. This may help to process the data from the API response.

If you choose to code in TypeScript, you can refer to `types.ts` for a simplified schema representation of the API's response type.

## Expected result

Import your React component from `App.tsx` and make sure it renders to clearly indicate whether the store is currently open or closed.

Example

```tsx
<StoreOpenIndicator storeId={1337} />
```

## Disclaimers

This project is intentionally simplified so as to streamline the DX and limit the assignment scope. No build scripts, test suites etc are run, and the API is not requiring authentication.

## Contact

- [Peter Skogsberg](mailto:peter.skogsberg@xxl.se)
