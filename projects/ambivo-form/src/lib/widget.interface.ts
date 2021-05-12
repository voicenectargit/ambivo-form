import { FormlyFieldConfig } from '@ngx-formly/core';

export interface WidgetInterface {
  id: string;
  name: string;
  type: string;
  description: string;
  body: {
    token?: string;
    title?: string;
    subtitle?: string;
    submit: string;
    message?: string;
    redirect_url?: string;
    actions?: string[];
    multistep?: boolean;
    fields: FormlyFieldConfig[];
    theme?: any;
    logo?: string;
  };
}
