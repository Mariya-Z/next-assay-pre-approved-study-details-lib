## One column

Number of represented columns depend of width wrap

If wrap width is less than 703px, there will be one column

### Tempalte for this example looks like code below

```
<style>
  .ine-column {
    width: 300px;
  }
  .container {
    display: flex;
    justify-content: center;
  }
</style>

<div class="container">
    <div class="one-column">
        <next-assay-pre-approved-study-details
            [data]="data"
        ></next-assay-pre-approved-study-details>
    </div>
</div>
```
