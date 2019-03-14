## Three columns

Number of represented columns depend of width wrap

If wrap width is 1400-1056px, there will be three columns

### Tempalte for this example looks like code below

```
<style>
  .three-columns {
    width: 1060px;
  }
  .container {
    display: flex;
    justify-content: center;
  }
</style>

<div class="container">
    <div class="three-columns">
        <next-assay-pre-approved-study-details
            [data]="data"
        ></next-assay-pre-approved-study-details>
    </div>
</div>
```
