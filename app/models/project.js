import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(String),
  detailUrl: DS.attr(String),
  name: DS.attr(String),
  previewImage: DS.attr(String)
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Sound-Activated Walking Robot',
      detailUrl: 'http://littlebits.cc/projects/sound-activated-walking-robot',
      previewImage: 'https://lb-community.s3.amazonaws.com/uploads/image/asset/3388/large_IMG_0279.jpg',
      description: 'This little guy has 2 mounting boards for a body. Just add littleBits and some sturdy legs to get him walking. Control his stride by adjusting the pulse and slide dimmers that connect to his servo-activated legs. Activate the sound and motion triggers and he will happily come over and greet you.'
    },
    {
      id: 2,
      name: 'Remote Control Facetime Car',
      detailUrl: 'http://littlebits.cc/projects/remote-control-facetime-car',
      previewImage: 'https://lb-community.s3.amazonaws.com/uploads/image/asset/3550/large_IMG_9905.jpg',
      description: 'Using a pair of wireless modules, a couple DC motors, a servo, and 2 smartphones, you can explore the unknown -- like Mars or under the couch! Here is a solution for a future astronaut or a person desperate for a quarter. Set up a videocall between two smartphones and place one on the vehicle and one in the controller. Slide dimmers on the controller to steer the vehicle and control the gripper arm. '
    },
    // {
    //   id: 3,
    //   name: 'Remote Pet Feeder',
    //   detailUrl: 'http://littlebits.cc/projects/remote-pet-feeder',
    //   previewImage: 'https://lb-community.s3.amazonaws.com/uploads/image/asset/4758/large_IMG_2526.jpg',
    //   description: 'You can either feed your pet remotely by pressing the button in Cloud Control (on your phone or computer) or you can set up an automated feeding schedule through IFTTT (If this then that). IFTTT is a service that lets you connect to different web apps through simple conditional statements.'
    // },
    {
      id: 4,
      name: 'Bumperball',
      detailUrl: 'http://littlebits.cc/projects/bumperball',
      previewImage: 'https://lb-community.s3.amazonaws.com/uploads/image/asset/13555/large_20724c50-0cfd-4c33-be1b-6d86b49bc00d.jpg',
      description: 'INVENT A GAME THAT PUTS A NEW SPIN ON AN OLD ARCADE FAVORITE: THE PINBALL MACHINE. Use the slide dimmer to catapult the ball and watch it bounce and bump all over the box like it’s out of control!'
    }
  ]
});
