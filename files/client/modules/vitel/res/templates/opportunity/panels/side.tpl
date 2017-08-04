<div class="row">
    {{#each fieldList}}
    <div class="cell form-group col-sm-6 col-md-12{{#if hidden}} hidden-cell{{/if}}" data-name="{{name}}">
        <label class="control-label{{#if hidden}} hidden{{/if}}" data-name="{{name}}"><span class="label-text">{{translate name scope=../model.name category='fields'}}</span></label>
        <div class="field{{#if hidden}} hidden{{/if}}" data-name="{{name}}">
        {{{var name ../this}}}
        </div>
    </div>
    {{/each}}
    <a href="https://invis.io/RXCDEJZMP#/241275682_8"><button class="btn btn-primary-action" type="button" style="width:100%">Generar Nota de Venta</button></a>
</div>
