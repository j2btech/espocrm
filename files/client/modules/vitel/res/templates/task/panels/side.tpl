<div class="row">
    {{#each fieldList}}
    <div class="cell form-group col-sm-6 col-md-12{{#if hidden}} hidden-cell{{/if}}" data-name="{{name}}">
        <label class="control-label{{#if hidden}} hidden{{/if}}" data-name="{{name}}"><span class="label-text">{{translate name scope=../model.name category='fields'}}</span></label>
        <div class="field{{#if hidden}} hidden{{/if}}" data-name="{{name}}">
        {{{var name ../this}}}
        </div>
    </div>
    {{/each}}
    <p><button class="btn btn-primary-action" type="button" style="width:100%" data-action="quotate">Generar Cotizaci&oacute;n</button></p>
    <p><button class="btn btn-primary-action" type="button" style="width:100%" data-action="response">Responder</button></p>
</div>
