import { FormlyFieldConfig } from '@ngx-formly/core';

export interface WidgetInterface {
  id: string;
  name: string;
  type: string;
  description: string;
  body: {
    title?: string;
    subtitle?: string;
    submit: string;
    message?: string;
    redirect_url?: string;
    actions?: string[];
    multistep?: boolean;
    fields: FormlyFieldConfig[];
    styling: any;
  };
}
