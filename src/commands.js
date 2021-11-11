/* eslint-disable no-useless-escape */
// Stores user commands (accessible via trigger word set in config.js)
const config = require("./config");
exports.categories = {
    "Cơ bản": {
        "display_name": "Meta",
        "description": "Commands related to the bot itself",
        "commands": {
            "help": {
                "display_names": ["help"],
                "pretty_name": "Help",
                "short_description": "",
                "description": "Biết thêm thông tin về lệnh hoặc mở bảng trợ giúp nhanh",
                "syntax": "help ({command})",
                "example": "help stats",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /help(.*)/i,
                "experimental": false
            },
            "stats": {
                "display_names": ["stats"],
                "pretty_name": "Stats",
                "short_description": "Lấy số liệu thống kê về lệnh / người dùng",
                "description": "Hiển thị thông tin về lệnh hoặc cách sử dụng của người dùng",
                "syntax": "stats {command}",
                "example": "stats alive",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /stats(.*)/i,
                "experimental": false
            },
            "psa": {
                "display_names": ["psa"],
                "pretty_name": "PSA",
                "short_description": "Nhắn tin cho tất cả các nhóm của bot",
                "description": "Thông báo một tin nhắn cho tất cả các cuộc trò chuyện nhóm mà bot có mặt",
                "syntax": "psa {message}",
                "example": "psa Hello, this is AssumeZero-Bot",
                "sudo": true,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /psa ([\s\S]*)/i, // Match EVERYTHING
                "experimental": false
            },
            "bug": {
                "display_names": ["bug", "bug report"],
                "pretty_name": "Bug",
                "short_description": "File a bug report",
                "description": `Nhắn tin trực tiếp ${config.owner.names.short} với tin nhắn của bạn và thêm vào cuộc trò chuyện của bạn để gỡ lỗi`,
                "syntax": "bug {message}",
                "example": "bug pinging bị lỗi",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /bug(.*)?/i,
                "experimental": false
            },
            "alive": {
                "display_names": ["alive", "alive?"],
                "pretty_name": "Alive",
                "short_description": "Con bot đã tỉnh chưa?",
                "description": "Kiểm tra xem bot có đang chạy hay không",
                "syntax": "alive(?)",
                "example": "alive?",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /alive(?:\?)?/i,
                "experimental": false
            },
            "ban": {
                "display_names": ["ban", "unban"],
                "pretty_name": "Ban",
                "short_description": "",
                "description": "Cấm hoặc bỏ cấm thành viên được cung cấp",
                "syntax": "(un)ban {member}",
                "example": "ban me",
                "sudo": true,
                "attachments": false,
                "user_input": {
                    "accepts": true,
                    "optional": false
                },
                "regex": "(un)?ban",
                "experimental": false
            },
            "mute": {
                "display_names": ["mute", "unmute"],
                "pretty_name": "Mute/unmute",
                "short_description": "Bật/tắt easter eggs",
                "description": " easter eggs cho đến khi chúng được bật lại",
                "syntax": "(un)mute",
                "example": ["mute", "unmute"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /(un)?mute/i,
                "experimental": false
            },
            "christen": {
                "display_names": ["christen"],
                "pretty_name": "Christen",
                "short_description": "Đặt tên cho bot",
                "description": "Bot không tự coi mình là người dùng vì mục đích bảo mật, vì vậy lệnh name sẽ không hoạt động trên nó, nhưng lệnh này cho phép bạn đặt tên cho nó",
                "syntax": "christen {name}",
                "example": `christen ${config.bot.names.short || config.bot.names.long}`,
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /christen (.*)/i,
                "experimental": false
            },
            "clearstats": {
                "display_names": ["clear stats"],
                "pretty_name": "Xóa số liệu thống kê",
                "short_description": "",
                "description": "Xóa số liệu thống kê sử dụng để bắt đầu lại",
                "syntax": "clear stats",
                "example": "",
                "sudo": true,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /clear stats/i,
                "experimental": false
            },
            "alias": {
                "display_names": ["alias"],
                "pretty_name": "Alias",
                "short_description": "Chỉ định một tên người dùng thay thế",
                "description": "Tên người dùng mặc định của thành viên là tên của họ; lệnh này cho phép người dùng chỉ định tên người dùng thay thế, tên người dùng này sẽ được chấp nhận trong bất kỳ lệnh nào yêu cầu tên thành viên",
                "syntax": "alias ({member}|clear {member}|{member} {alternate name})",
                "example": [`alias me ${config.bot.names.short || "Bot"}`, `alias clear me`, `alias me`],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": true,
                    "optional": false
                },
                "regex": ["alias( clear)?", "(?: (.*))?"],
                "experimental": false
            },
            "restart": {
                "display_names": ["restart"],
                "pretty_name": "Restart",
                "short_description": "",
                "description": "Khởi động lại bot",
                "syntax": "restart",
                "example": "",
                "sudo": true,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /restart/i,
                "experimental": false
            },
            "undo": {
                "display_names": ["undo"],
                "pretty_name": "Undo",
                "short_description": "Xóa tin nhắn cuối cùng",
                "description": "Xóa tin nhắn cuối cùng do bot gửi",
                "syntax": "undo",
                "example": ["undo"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /undo/i,
                "experimental": false
            },
            "richcontent": {
                "display_names": ["rich content"],
                "pretty_name": "Rich content",
                "short_description": " Bật / tắt nội dung phong phú(tweet mở rộng, bài viết wiki, v.v.)",
                "description": "Bật / tắt nội dung phong phú ",
                "syntax": "rich content (on|off)",
                "example": ["rich content on", "rich content off"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /rich content (on|off)/i,
                "experimental": false
            },
        }
    },
    "Tin nhắn": {
        "display_name": "Messenger",
        "description": "For interacting with Messenger features",
        "commands": {
            "kick": {
                "display_names": ["kick"],
                "pretty_name": "Kick",
                "short_description": "Xóa thành viên trong 1 khoảng thời gian",
                "description": "Xóa một thành viên nhất định khỏi cuộc trò chuyện trong một khoảng thời gian tùy chọn",
                "syntax": "kick {member} ({number of seconds})",
                "example": ["kick me", "kick me 25"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": true,
                    "optional": false
                },
                "regex": ["kick", "(?: (\\d+))?"], // Optional number param after name
                "experimental": false
            },
            "addsearch": {
                "display_names": ["add", "search"],
                "pretty_name": "Add/search",
                "short_description": "",
                "description": "Tìm kiếm người dùng nhất định và xuất ra kết quả phù hợp nhất (để tìm kiếm) hoặc thêm người đó vào cuộc trò chuyện (để thêm)",
                "syntax": "(add|search ({number of results})) {user}",
                "example": ["search Physics Resurrected", "add Physics Resurrected", "search 5 Physics Resurrected"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /(add|search(?: (\d*))?) (.*)/i,
                "experimental": false
            },

            "color": {
                "display_names": ["color"],
                "pretty_name": "Color",
                "short_description": "Đặt màu trò chuyện; xem trợ giúp đầy đủ cho các giá trị được chấp nhận",
                "description": "Đặt màu trò chuyện thành một trong một số giá trị hiện được chấp nhận:\n\nMessengerBlue: none\nViking: #44bec7\nGoldenPoppy: #ffc300\nRadicalRed: #fa3c4c\nShocking: #d696bb\nPictonBlue: #6699cc\nFreeSpeechGreen: #13cf13\nPumpkin: #ff7e29\nLightCoral: #e68585 \nMediumSlateBlue: #7646ff\nDeepSkyBlue: #20cef5\nFern: #67b868\nCameo: #d4a88c\nBrilliantRose: #ff5ca1\nBilobaFlower: #a695c7\n\nThis command accepts either the name or hex value as input.",
                "syntax": "color (#{six-digit hex color}|rand(om))",
                "example": ["color", "color #ffc300", "color random"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /color( (#(?:[a-f]|\d){6}|rand(?:om)?|[A-z]+))?/i,
                "experimental": false
            },
            "clearnick": {
                "display_names": ["clear nickname"],
                "pretty_name": "Clear nickname",
                "short_description": "",
                "description": "Clears the nickname for the given member",
                "syntax": "clear (nick)name {member}",
                "example": "clear name me",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": true,
                    "optional": false
                },
                "regex": "clear (?:nick)?name",
                "experimental": false
            },
            "setnick": {
                "display_names": ["nickname", "name", "rename"],
                "pretty_name": "Set nickname",
                "short_description": "",
                "description": "Đặt biệt hiệu nhất định cho thành viên nhất định",
                "syntax": "((nick|re)name) {member} {nickname}",
                "example": ["nickname me Bot Impersonator", "rename me Bot Impersonator"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": true,
                    "optional": false
                },
                "regex": ["(?:(?:nick|re)?name)", " (.*)"],
                "experimental": false
            },
            "randmess": {
                "display_names": ["random message"],
                "pretty_name": "Random message",
                "short_description": "",
                "description": "Lấy một tin nhắn ngẫu nhiên từ lịch sử gần đây của nhóm",
                "syntax": "random message",
                "example": "",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /random message/i,
                "experimental": false
            },
            "emoji": {
                "display_names": ["emoji"],
                "pretty_name": "Emoji",
                "short_description": "",
                "description": "Đặt biểu tượng cảm xúc thành giá trị Unicode được chỉ định",
                "syntax": "emoji {emoji}",
                "example": "emoji 🚀",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /emoji ([\uD83C-\uDBFF\uDC00-\uDFFF]{1,2})/iu, // Match emoji w/ Unicode modifier (1-2 chars)
                "experimental": false
            },
            "photo": {
                "display_names": ["picture", "photo", "image"],
                "pretty_name": "Photo",
                "short_description": "Sets group photo",
                "description": "Thay đổi ảnh của nhóm thành ảnh tại URL được chỉ định hoặc ảnh đính kèm hoặc hiển thị ảnh hiện tại nếu không có.",
                "syntax": "(photo|picture|image) ({url})",
                "example": ["photo http://i.imgur.com/tzwVWot.png", "photo [attach an image]", "photo"],
                "sudo": false,
                "attachments": true,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /(?:photo|picture|image)(?: ((?:http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?))?/i, // URL
                "experimental": false
            },
            "poll": {
                "display_names": ["poll"],
                "pretty_name": "Poll",
                "short_description": "Tạo cuộc thăm dò ý kiến nhóm",
                "description": "Tạo cuộc thăm dò ý kiến trong nhóm với tiêu đề đã cho và các tùy chọn ban đầu được phân tách bằng dấu phẩy tùy chọn trong ngoặc",
                "syntax": "poll {title} ([{option 1}, {option 2}, {option 3}, {option n}])",
                "example": ["poll What time should we eat dinner? [6 PM, 6:30 PM, Tomorrow]", "poll Which restaurant should we go to?"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /poll ([^[]+)(?:\[(.*)\])?/i,
                "experimental": false
            },
            "title": {
                "display_names": ["set title", "change title", "title"],
                "pretty_name": "Đặt tiêu đề nhóm",
                "short_description": "",
                "description": "Đặt tiêu đề nhóm thành giá trị được chỉ định",
                "syntax": "title {title}",
                "example": "title One Chat to Rule Them All",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /title (.*)/i,
                "experimental": false
            },
            "branch": {
                "display_names": ["branch"],
                "pretty_name": "Branch",
                "short_description": "Tạo một nhóm mới từ một tập hợp con của các thành viên hiện tại",
                "description": "Tạo một cuộc trò chuyện nhóm mới cho các thành viên của cuộc trò chuyện hiện tại, với một tiêu đề tùy chọn",
                "syntax": "branch (title) {member 1}, {member 2}, {member 3}, {member n}",
                "example": ["branch me, Cameron, Jonah, Justin", "branch Test Chat me, Larry"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /branch ([^,]+ )?((?:[^,]+(?:,|$))+)/i,
                "experimental": false
            },
            "restore": {
                "display_names": ["restore"],
                "pretty_name": "Restore",
                "short_description": "Khôi phục các thuộc tính của cuộc trò chuyện trước đó",
                "description": "Cung cấp một ID chuỗi cho cuộc trò chuyện hiện có mà bot tham gia, điều này sẽ thay đổi các thuộc tính của cuộc trò chuyện hiện tại (màu sắc, biệt hiệu, tiêu đề, v.v.) để phù hợp",
                "syntax": "restore {thread ID}",
                "example": ["restore 883154065107088"],
                "sudo": true,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /restore (\d+)/i,
                "experimental": false
            },
            "admin": {
                "display_names": ["admin", "deadmin"],
                "pretty_name": "(De)admin",
                "short_description": "De(admin) a user",
                "description": "Thay đổi trạng thái quản trị của người dùng cho một nhóm",
                "syntax": "(de)admin {user}",
                "example": ["admin me", "deadmin me"],
                "sudo": true,
                "attachments": false,
                "user_input": {
                    "accepts": true,
                    "optional": false
                },
                "regex": "(de)?admin",
                "experimental": false
            }
        }
    },
    "Ẩn": {
        "commands": {
            "destroy": { // DANGEROUS COMMAND
                "display_names": [], // Secret
                "pretty_name": "Destroy",
                "short_description": "",
                "description": "Phá/Flop nhóm",
                "syntax": "sudo destroy confirm", // Redundancy to prevent accidental triggers
                "example": "",
                "sudo": true,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /sudo destroy confirm/i,
                "experimental": false
            },
            "infiltrate": {
                "display_names": [], // Secret command
                "pretty_name": "Infiltrate",
                "short_description": "",
                "description": "Cho phép bot thêm quản trị viên vào các nhóm có trong đó",
                "syntax": "infiltrate ({threadId}|{group name})",
                "example": ["infiltrate", "infiltrate 883154065107088", "infiltrate Assume Zero Brain Power"],
                "sudo": true,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /infiltrate(?: ([0-9]+|.+))?/i,
                "experimental": false
            }
        }
    },
    "Giải trí": {
        "display_name": "Fun",
        "description": "Just for fun",
        "commands": {
            "vote": {
                "display_names": ["<", ">", "points", "vote"],
                "pretty_name": "Vote (</>)",
                "short_description": "Bỏ phiếu cho người dùng",
                "description": "Cho phép người dùng ủng hộ (>) hoặc phản đối (<) một người dùng nhất định để ảnh hưởng đến tổng điểm hiện tại của họ",
                "syntax": "(<|>) {member}",
                "example": ["> me", "< me"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": true,
                    "optional": false
                },
                "regex": "(<|>)",
                "experimental": false
            },
            "score": {
                "display_names": ["score", "scoreboard"],
                "pretty_name": "Score",
                "short_description": "Nhận / đặt điểm người dùng",
                "description": "Hiển thị điểm số hiện tại của người dùng hoặc đặt nó thành một giá trị mới được cung cấp (phải ≥ 0)",
                "syntax": "score(board|({new score}) {member})",
                "example": ["scoreboard", "score me", "score me 20"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": true,
                    "optional": true
                },
                "regex": ["score(board)?", "(?: (\\d+))?"],
                "experimental": false
            },
            "order66": {
                "display_names": ["execute order 66", "order 66"],
                "pretty_name": "Order 66",
                "short_description": "Hủy nhóm tạm thời",
                "description": `Mỗi thành viên trong nhóm, hiện là kẻ thù của cuộc trò chuyện nhóm (trong ${config.order66Time} giây)`,
                "syntax": "execute order 66",
                "example": "",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /execute order 66/i,
                "experimental": false
            },
            "hitlights": {
                "display_names": ["hit the lights"],
                "pretty_name": "Hit the lights",
                "short_description": "Màu trò chuyện ngẫu nhiên",
                "description": "Thay đổi màu nhóm thành màu ngẫu nhiên liên tiếp nhanh chóng",
                "syntax": "hit the lights",
                "example": "",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /hit the lights/i,
                "experimental": false
            },
            "wakeup": {
                "display_names": ["wake up", "wake"],
                "pretty_name": "Wake up",
                "short_description": "Nhắn tin cho người dùng nhiều lần",
                "description": `Gửi tin nhắn ${config.wakeUpTimes} cho thành viên nhất định`,
                "syntax": "wake up {member}",
                "example": ["wake me", "wake up me"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": true,
                    "optional": false
                },
                "regex": "wake(?: up)?",
                "experimental": false
            },
            "echo": {
                "display_names": ["echo", "quote"],
                "pretty_name": "Echo/quote",
                "short_description": "",
                "description": "Bắt chước hoặc trích dẫn câu lệnh được cung cấp",
                "syntax": "(echo|quote) {statement}",
                "example": ["echo Hello, world!", "quote I am not a bot"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /(echo|quote)(?:(?:\s|$)([\s\S]+))?/im,
                "experimental": false
            },
            "answer": {
                "display_names": ["ask", "answer", "magic 8 ball"],
                "pretty_name": "Magic 8-ball",
                "short_description": "",
                "description": "Trả lời câu hỏi có / không của bạn với một giá trị ngẫu nhiên",
                "syntax": "(ask|answer) {question}",
                "example": ["ask Do you believe in magic?", "answer Will we have school tomorrow?"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /(?:ask|answer) .*/i,
                "experimental": false
            },
            "rng": {
                "display_names": ["random", "rand", "rng"],
                "pretty_name": "Random number generator",
                "short_description": "",
                "description": `Tạo một số ngẫu nhiên trong phạm vi đã cho (giữa hai args nếu được truyền, giữa ${config.defaultRNGBounds[0]} và arg nếu một được vượt qua hoặc giữa ${config.defaultRNGBounds[0]} đến ${config.defaultRNGBounds[1]} nếu không)`,
                "syntax": "(rng|rand(om)) (({lower bound}) {upper bound})",
                "example": ["rand", "rng 0 50", "rng 100"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /r(?:and(?:om)?|ng)(?: (\d+))?(?: (\d+))?/i,
                "experimental": false
            },
            "snap": {
                "display_names": ["snap"],
                "pretty_name": "Snap",
                "short_description": "flop tạm thời một nửa nhóm",
                "description": "Vui vẻ không phải là điều mà người ta cân nhắc khi cân bằng cuộc trò chuyện nhóm. Nhưng điều này ... làm tôi nở một nụ cười ...",
                "syntax": "snap",
                "example": "",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /snap/i,
                "experimental": false
            },
            "choose": {
                "display_names": ["choose"],
                "pretty_name": "Choose",
                "short_description": "",
                "description": "Chọn một thứ từ danh sách tùy chọn",
                "syntax": "Chọn {thing 1}, {thing 2}, {thing 3}",
                "example": "choose Mr. Robot, Better Call Saul, Suits",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /choose ((?:[^,]+(?:,|$))+)/i,
                "experimental": false
            }
        }

    },
    "Thông tin": {
        "display_name": "Information",
        "description": "Retrieving info from various sources",
        "commands": {
            "xkcd": {
                "display_names": ["xkcd", "xkcd search"],
                "pretty_name": "xkcd",
                "short_description": "Liên kết xkcd",
                "description": "Xuất ra xkcd được đánh số hoặc kết quả tìm kiếm (hoặc một kết quả ngẫu nhiên nếu không có kết quả nào được chỉ định)",
                "syntax": "xkcd (new|{comic number}|search {search query})",
                "example": ["xkcd new", "xkcd 303", "xkcd search Wisdom of the Ancients"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /xkcd(?: (new|\d+|search (.+)))?/i,
                "experimental": false
            },
            "wiki": {
                "display_names": ["wiki", "wikipedia", "wiki search"],
                "pretty_name": "Wiki",
                "short_description": "Tìm kiếm trên Wikipedia",
                "description": "Tìm kiếm trên Wikipedia cho một truy vấn nhất định và trả về kết quả tốt nhất",
                "syntax": "wiki {query}",
                "example": ["wiki bots"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /wiki (.*)/i,
                "experimental": false
            },
            "space": {
                "display_names": ["space"],
                "pretty_name": "Space",
                "short_description": "Tìm kiếm hình ảnh từ cơ sở dữ liệu NASA",
                "description": "Thực hiện tìm kiếm trên cơ sở dữ liệu về hình ảnh không gian của NASA, có tại https://images.nasa.gov/; sử dụng 'ngẫu nhiên' để nhận kết quả ngẫu nhiên thay vì đầu trang",
                "syntax": "space (random) {search query}",
                "example": ["space mars", "space milky way", "space random sun"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /space (rand(?:om)? )?(.*)/i,
                "experimental": false
            },
            "wolfram": {
                "display_names": ["wolfram"],
                "pretty_name": "Wolfram",
                "short_description": "Tìm kiếm Wolfram Alpha",
                "description": "Thực hiện tìm kiếm bằng Wolfram Alpha (http://www.wolframalpha.com)",
                "syntax": "wolfram {query}",
                "example": ["wolfram ∫(5x^2 + 10x + 34)dx", "wolfram Who is the president of the United States?"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /wolfram (.*)/i,
                "experimental": false
            },
            "weather": {
                "display_names": ["weather"],
                "pretty_name": "Weather",
                "short_description": "",
                "description": "Nhận thời tiết hiện tại cho một thành phố nhất định",
                "syntax": "weather {city name}",
                "example": "weather Timonium",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /weather (.+)/i,
                "experimental": false
            },
            "google": {
                "display_names": ["google"],
                "pretty_name": "Google",
                "short_description": "Tạo liên kết tới Google với cụm từ đã cho",
                "description": "Đưa ra một truy vấn tìm kiếm, bot sẽ tạo một liên kết đến một tìm kiếm trên Google cho nó",
                "syntax": "google {query}",
                "example": ["google UMD schedule of classes"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /google (.+)/i,
                "experimental": false
            },
            "lucky": {
                "display_names": ["lucky"],
                "pretty_name": "Lucky",
                "short_description": "tôi cảm thấy may mắn",
                "description": "Sao chép chức năng của chức năng \"Tôi cảm thấy may mắn\" của Google (đưa đến kết quả trang web đầu tiên cho một tìm kiếm)",
                "syntax": "lucky {query}",
                "example": ["lucky define testing"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /lucky (.+)/i,
                "experimental": true
            },
            "covid": {
                "display_names": ["covid"],
                "pretty_name": "COVID",
                "short_description": "Thông tin về COVID-19",
                "description": "Tìm kiếm các tập dữ liệu khác nhau để biết thông tin về các trường hợp COVID trên khắp thế giới",
                "syntax": "covid ((state|country|province|top|today|vaccine) {query})",
                "example": ["covid", "covid state Maryland", "covid country Italy", "covid province Hubei", "covid top 5", "covid today all", "covid vaccine moderna"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /covid(?: (state|country|province|top|today|vaccine) (.+))?/i,
                "experimental": false
            },
            "stocks": {
                "display_names": ["stocks", "$"],
                "pretty_name": "Stocks",
                "short_description": "",
                "description": "Nhận giá cổ phiếu hiện tại",
                "syntax": "${ticker symbol}",
                "example": "$TSLA",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optinoal": false
                },
                "regex": /\$([A-Z]+)/i,
                "experimental": false
            }
        }
    },
    "spotify": {
        "display_name": "Spotify",
        "description": "For interacting with Spotify",
        "commands": {
            "spotsearch": {
                "display_names": ["search artist", "search song", "search track"],
                "pretty_name": "Spotify search",
                "short_description": "Tìm kiếm âm nhạc",
                "description": "Tìm kiếm cơ sở dữ liệu của Spotify cho các nghệ sĩ và bài hát",
                "syntax": "search (artist|(song|track)) {query}",
                "example": ["search artist The Goo Goo Dolls", "search song Back in Black"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /search (artist|song|track) (.*)/i,
                "experimental": false
            },
            "song": {
                "display_names": ["song", "get song"],
                "pretty_name": "Song",
                "short_description": "Bài hát ngẫu nhiên",
                "description": "Lấy một bài hát ngẫu nhiên từ danh sách phát của thành viên được thêm bằng lệnh 'playlist'",
                "syntax": "song ({member})",
                "example": "song me",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": true,
                    "optional": true
                },
                "regex": "song",
                "experimental": false
            },
            "playlist": {
                "display_names": ["playlist"],
                "pretty_name": "Playlist",
                "short_description": "Thêm / cập nhật danh sách phát",
                "description": "Thêm hoặc cập nhật danh sách phát cho nhóm - để tìm URI của danh sách phát trong màn hình Spotify, hãy nhấp chuột phải vào danh sách đó, chọn 'Chia sẻ' và nhấp vào 'URI'",
                "syntax": "playlist {member} {playlist URI}",
                "example": "playlist me spotify:user:astrocb:playlist:05zXCuscrw1BW5NyeN45DB",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": true,
                    "optional": true
                },
                "regex": ["playlist", "( spotify:user:([^:]+):playlist:([A-z0-9]+))?"],
                "experimental": false
            }
        }
    },
    "Ảnh": {
        "display_name": "Photos",
        "description": "For photo editing",
        "commands": {
            "bw": {
                "display_names": ["bw", "black and white", "grayscale"],
                "pretty_name": "Black & white",
                "short_description": "Chuyển đổi hình ảnh thành đen trắng",
                "description": "Chuyển đổi hình ảnh sang màu đen trắng bằng URL hoặc hình ảnh đã tải lên",
                "syntax": "bw ({url})",
                "example": ["bw http://i.imgur.com/tzwVWot.png", "bw [attach an image]"],
                "sudo": false,
                "attachments": true,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /bw(?: ((?:http|ftp|https):\/\/(?:[\w_-]+(?:(?:\.[\w_-]+)+))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?))?/i,
                "experimental": false
            },
            "sepia": {
                "display_names": ["sepia"],
                "pretty_name": "Sepia",
                "short_description": "Chuyển hình ảnh sang tông màu nâu đỏ",
                "description": "Chuyển hình ảnh sang tông màu nâu đỏ bằng URL hoặc hình ảnh đã tải lên",
                "syntax": "sepia ({url})",
                "example": ["sepia http://i.imgur.com/tzwVWot.png", "sepia [attach an image]"],
                "sudo": false,
                "attachments": true,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /sepia(?: ((?:http|ftp|https):\/\/(?:[\w_-]+(?:(?:\.[\w_-]+)+))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?))?/i,
                "experimental": false
            },
            "flip": {
                "display_names": ["flip", "mirror"],
                "pretty_name": "Flip",
                "short_description": "Lật/phản chiếu (flip/mirror) một hình ảnh",
                "description": "Lật/phản chiếu (flip/mirror) hình ảnh từ URL hoặc tệp đính kèm đã cho",
                "syntax": "flip (horiz(ontal)|vert(ical)) ({url})",
                "example": ["flip http://i.imgur.com/tzwVWot.png", "flip horizontal http://i.imgur.com/tzwVWot.png", "flip vert [attach an image]"],
                "sudo": false,
                "attachments": true,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /flip (horiz(?:ontal)?|vert(?:ical)?)(?: ((?:http|ftp|https):\/\/(?:[\w_-]+(?:(?:\.[\w_-]+)+))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?))?/i,
                "experimental": false
            },
            "invert": {
                "display_names": ["invert"],
                "pretty_name": "Invert",
                "short_description": "Đảo ngược màu sắc hình ảnh",
                "description": "Đảo ngược màu sắc của hình ảnh từ URL hoặc tệp đính kèm đã cho",
                "syntax": "invert ({url})",
                "example": ["invert http://i.imgur.com/tzwVWot.png", "invert [attach an image]"],
                "sudo": false,
                "attachments": true,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /invert(?: ((?:http|ftp|https):\/\/(?:[\w_-]+(?:(?:\.[\w_-]+)+))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?))?/i,
                "experimental": false
            },
            "blur": {
                "display_names": ["blur"],
                "pretty_name": "Blur",
                "short_description": "Làm mờ hình ảnh",
                "description": "Làm mờ hình ảnh theo số lượng pixel nhất định từ URL hoặc tệp đính kèm đã cho; tham số tùy chọn để làm mờ Gaussian, rất chậm (khuyến nghị <15 pixel cho cái này)",
                "syntax": "blur {# of pixels} (gauss) ({url})",
                "example": ["blur 50 http://i.imgur.com/tzwVWot.png", "blur 10 gauss [attach an image]"],
                "sudo": false,
                "attachments": true,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /blur(?: (\d+))?( gauss)?(?: ((?:http|ftp|https):\/\/(?:[\w_-]+(?:(?:\.[\w_-]+)+))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?))?/i,
                "experimental": false
            },
            "overlay": {
                "display_names": ["overlay"],
                "pretty_name": "Overlay",
                "short_description": "Lớp phủ văn bản trên một hình ảnh",
                "description": "Lớp phủ văn bản trên hình ảnh từ URL hoặc tệp đính kèm đã cho",
                "syntax": "overlay ({url}) {text}",
                "example": ["overlay http://i.imgur.com/tzwVWot.png Hello there!", "overlay Wake up! [attach an image]"],
                "sudo": false,
                "attachments": true,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /overlay(?: ((?:http|ftp|https):\/\/(?:[\w_-]+(?:(?:\.[\w_-]+)+))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?))?(.*)/i,
                "experimental": false
            },
            "brightness": {
                "display_names": ["brighten", "darken"],
                "pretty_name": "Brighten/darken",
                "short_description": "Thay đổi độ sáng hình ảnh",
                "description": "Làm sáng hoặc tối hình ảnh theo tỷ lệ phần trăm nhất định",
                "syntax": "(brighten|darken) {percentage} ({url})",
                "example": ["brighten 10 http://i.imgur.com/tzwVWot.png", "darken 20 [attach an image]"],
                "sudo": false,
                "attachments": true,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /(brighten|darken) (\d*)(?: ((?:http|ftp|https):\/\/(?:[\w_-]+(?:(?:\.[\w_-]+)+))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?))?/i,
                "experimental": false
            }
        }
    },
    "umd": {
        "display_name": "UMD",
        "description": "Commands related to UMD",
        "commands": {
            "course": {
                "display_names": ["course"],
                "pretty_name": "Course",
                "short_description": "Thông tin khóa học UMD",
                "description": "Nhận thông tin về một khóa học cụ thể tại UMD",
                "syntax": "course {course}",
                "example": "course CMSC330",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /course ([A-z]{4}[0-9]{3}[A-z]?)/i,
                "experimental": false
            },
            "professor": {
                "display_names": ["professor"],
                "pretty_name": "Professor",
                "short_description": "Thông tin giáo sư UMD",
                "description": "Nhận thông tin về một giáo sư cụ thể tại UMD",
                "syntax": "professor {professor}",
                "example": "professor Allan Yashinski",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /professor (.+)/i,
                "experimental": false
            },
            "whereis": {
                "display_names": ["whereis"],
                "pretty_name": "Whereis",
                "short_description": "Tìm các tòa nhà UMD",
                "description": "Tìm vị trí của các tòa nhà UMD khác nhau",
                "syntax": "whereis {building name or code}",
                "example": "whereis AVW",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /whereis (.+)/i,
                "experimental": false
            },
            "findbus": {
                "display_names": ["findbus"],
                "pretty_name": "Find Bus",
                "short_description": "Tìm xe buýt UMD",
                "description": "Tìm vị trí của các xe buýt UMD khác nhau",
                "syntax": "findbus {bus number}",
                "example": "findbus 117",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /findbus (\d+)/i,
                "experimental": false
            }
        }
    },
    "linh tinh": {
        "display_name": "Miscellaneous",
        "description": "Random utility stuff",
        "commands": {
            "pin": {
                "display_names": ["pin"],
                "pretty_name": "Pin",
                "short_description": "Ghim tin nhắn vào cuộc trò chuyện",
                "description": `Ghim một tin nhắn vào cuộc trò chuyện sẽ được truy cập sau này bằng tên duy nhất (phân biệt chữ hoa chữ thường) ${config.introPin? `; các ghim đặc biệt có tên "${config.introPin}" sẽ được hiển thị khi một thành viên mới tham gia trò chuyện` : ""}`,
                "syntax": "pin (delete|rename|append) {pin name} ({new message})",
                "example": ["pin test Test message", "pin", "pin rename test other", "pin append other New stuff", "pin delete other"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /pin(?:(?:\s|$)([\S]+)?(?:\s|$)?([\s\S]+)?)?/im,
                "experimental": false
            },
            "tab": {
                "display_names": ["tab"],
                "pretty_name": "Tab",
                "short_description": "Giữ tổng số hoạt động",
                "description": "Duy trì tổng số đang hoạt động cho nhóm có thể tăng hoặc giảm (số tiền mặc định là 1)",
                "syntax": "tab {add|subtract|clear} ({amount})",
                "example": ["tab add 5.50", "tab subtract 2.10", "tab add", "tab subtract", "tab clear"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /tab(?: (add|subtract|clear|split)(?: \$?((?:\d+)?(?:\.\d+)?))?|)?/i,
                "experimental": false
            },
            "remind": {
                "display_names": ["remind"],
                "pretty_name": "Remind",
                "short_description": "",
                "description": "Gửi lời nhắc vào một thời điểm nhất định trong tương lai",
                "syntax": "remind {person} {reminder} (in|for|at) {time}",
                "example": "remind me let the dogs out in 20 minutes",
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": true,
                    "optional": false
                },
                "regex": ["remind", "[^\s](.+) (?:in|for|at|on) (.+)"],
                "experimental": false
            },
            "event": {
                "display_names": ["event"],
                "pretty_name": "Event",
                "short_description": "Tạo và quản lý sự kiện",
                "description": "Tạo, xóa và liệt kê các sự kiện trong cuộc trò chuyện, các sự kiện này sẽ gửi lời nhắc về thời gian đã đặt trước (với chức năng RSVP)",
                "syntax": "event (create {name} for {date/time}|delete {name}|list ({name}))",
                "example": ["event create Dinner for tomorrow at 6 PM", "event delete Dinner", "event list"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /event (?:(create) (.+) for (.+)|(delete) (.+)|(list)( .+)?)/i,
                "experimental": false
            },
            "group": {
                "display_names": ["group"],
                "pretty_name": "Mention groups",
                "short_description": "",
                "description": "Quản lý các nhóm người có thể được đề cập chung với @@group_name",
                "syntax": "group (create|delete|subscribe|unsubscribe) {group_name} ({users})",
                "example": ["group create testers me, Larry", "group delete testers", "group subscribe testers Anton", "group unsubscribe testers me"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /group (create|delete|subscribe|unsubscribe|list)(?: ([\w]+)(?: (.+))?)?/i,
                "experimental": false
            },
            "timer": {
                "display_names": ["timer"],
                "pretty_name": "Timer",
                "short_description": "",
                "description": "Bắt đầu / dừng bộ đếm thời gian trong cuộc trò chuyện và báo cáo thời lượng",
                "syntax": "timer (start|stop)",
                "example": ["timer start", "timer stop"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /timer (start|stop)/i,
                "experimental": false
            },
            "follow": {
                "display_names": ["follow", "unfollow"],
                "pretty_name": "Follow",
                "short_description": "Follow a Twitter account",
                "description": "Follows a Twitter account, sending new tweets to the chat as they're posted",
                "syntax": "(un)follow {twitter_handle}|list",
                "example": ["follow @AstroCB", "unfollow @AstroCB", "follow list"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /(un)?follow @?(\w+)/i,
                "experimental": false
            },
            "subscribe": {
                "display_names": ["subscribe", "unsubscribe"],
                "pretty_name": "Subscribe",
                "short_description": "Subscribe to an RSS feed",
                "description": "Subscribes to an RSS feed, sending new items to the chat as they're added",
                "syntax": "(un)subscribe {feed URL}|list",
                "example": ["subscribe https://github.com/AstroCB/AssumeZero-Bot/commits/master.atom", "unsubscribe https://github.com/AstroCB/AssumeZero-Bot/commits/master.atom", "subscribe list"],
                "sudo": false,
                "attachments": false,
                "user_input": {
                    "accepts": false,
                    "optional": false
                },
                "regex": /(un)?subscribe (\S+)/i,
                "experimental": false
            },
        }
    }
};

// Splice all of the categories' commands together into one map
const commGroups = Object.keys(exports.categories).map(cat => exports.categories[cat].commands);
exports.commands = commGroups.reduce((acc, group) => {
    for (let co in group) {
        if (group.hasOwnProperty(co)) {
            acc[co] = group[co];
        }
    }
    return acc;
}, {});
