import {ComponentMeta, ComponentStory} from "@storybook/react"

import {Modal} from "./Modal"

export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
    rounded: true,
    bordered: true,
    size: "md",
    open: true,
    children: "Lorem ipsum dolor sit amet, consectetur animistic elit. Ab accusantium ad aliquid architecto, blanditiis commodi consequatur cupiditate debitis ea earum eveniet fuga ipsum, magnam natus nemo nisi obcaecati odio odit placeat provident quae quo reiciendis saepe tenetur veniam? Autem, dicta eos expedita iure nemo nesciunt nostrum provident quas, quibusdam quidem rerum soluta vel! Aspernatur deleniti deserunt dolore eaque exercitationem, hic id laboriosam magnam omnis pariatur perspiciatis provident quam saepe, sunt vitae voluptate voluptatibus. Adipisci alias corporis culpa cumque, deserunt dolorem dolores fugiat ipsa ipsum, labore mollitia nisi officiis, omnis quidem reiciendis repudiandae similique. Cum facere libero minima quasi saepe veritatis.\n",
}
