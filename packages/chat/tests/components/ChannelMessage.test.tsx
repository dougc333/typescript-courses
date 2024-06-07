import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Message from '../../src/ui/components/Channel/Message'
import { IUser } from '../../src/utils/types'

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Message
      user={{ name: 'Mike', iconUrl: '', id: null, username: null }}
      createdAt={new Date('01-01-2001').toISOString()}
      body="Hello world!"
    />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
