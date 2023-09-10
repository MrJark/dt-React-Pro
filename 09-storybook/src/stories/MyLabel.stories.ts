import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";



const meta = { // la meta es la info del mismo componente
    title: 'MyLabel', // este es el title del componente pero a la vez es el path, si pongo /examples/MyLabel apareceá en la carpeta examples. Si pongo ui/labels/MyLabel creará la carpeta Ui que a su vez tendrá la de labels y que dentro estará el componente MyLabel
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered' // para centrar el componente
    },
    argTypes: { // puedes tener la capacidad de modificar el display del componente en story [Link](https://github.com/storybookjs/storybook/blob/91e9dee33faa8eff0b342a366845de7100415367/addons/controls/README.md#control-annotations)
        size: {
            control: 'inline-radio'
        }
    }
} satisfies Meta<typeof MyLabel>; // satisfies es propio de js

export default meta;

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Basic Label',
        size: 'h1',
    }
};

export const AllCaps: Story = {
    args: {
        label: 'AllCaps Label',
        size: 'p',
    }
};

export const Secondary: Story = {
    args: {
        label: 'Secondary Label',
        size: 'p',
    }
};

export const CustomColors: Story = {
    args: {
        label: 'Custom Colors Label',
        size: 'p',
    }
};

