import { FormlyFieldConfig } from '@ngx-formly/core';

export interface WidgetInterface {
  id: string;
  name: string;
  type: string;
  description: string;
  body: {
    multistep?: boolean;
    title?: string;
    subtitle?: string;
    submit: string;
    message?: string;
    redirect_url?: string;
    actions?: string[];
    fields: FormlyFieldConfig[];
    styling: any;
  };
}
