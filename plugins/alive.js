const{tiny}=require('../lib')
module.exports = {
  name: "alive",
  alias: ["live", "bot"],
  category: "info",
  desc: "Alive Msg",
  async mbb({ msg }) {
    const start = new Date().getTime()
		await msg.reply(tiny('Hi I,am Alive'))
		const end = new Date().getTime()
		return await msg.reply(tiny('  ')
		)
  },
};
