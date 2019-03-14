## Short version

Paraments protocol, species, discreteAllowed, cassette, route, ivDose, poDose are optional. If isFullVersion is false, these parametrs wouldn't be shown

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
            [isFullVersion]=false
        ></next-assay-pre-approved-study-details>
    </div>
</div>
```