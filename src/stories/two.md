## Two columns

Number of represented columns depend of width wrap

If wrap width is 1055-704px, there will be two columns

### Tempalte for this example looks like code below

```
<style>
  .two-columns {
    width: 704px;
  }
  .container {
    display: flex;
    justify-content: center;
  }
</style>

<div class="container">
    <div class="two-columns">
        <next-assay-pre-approved-study-details
            [data]="data"
        ></next-assay-pre-approved-study-details>
    </div>
</div>
```
