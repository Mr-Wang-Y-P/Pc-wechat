// import React from 'react'
import { Input, Image } from "antd";
import {
  SearchOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  EllipsisOutlined,
  SettingOutlined,
  PlusCircleOutlined,
  SendOutlined
} from "@ant-design/icons";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface MessageProps {
  message: string;
  imgUrls: string[];
  avatar: string;
  avatarName: string;
  isOwn?: boolean;
}
interface MessageListProps {
  name: string;
  id: number;
  Img: string;
  time: string;
  message: string;
  infos: string[];
  messages: MessageProps[];

}
export default function Message() {
  const searchMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const input = e.target.value.toLowerCase().trim();
    if (input === "") {
      setFilterMessageList(MessageList)
      // setCurrentData(data);
    } else {
      const fileData = MessageList.filter(message => message.name.toLowerCase().trim().includes(input))
      console.log(fileData);
      setFilterMessageList(fileData)
    }
  };
  const [showLeftIcon, setShowLeftIcon] = useState<boolean>(true);
  const LeftSliderRef = useRef<HTMLDivElement>(null);
  const InputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [imageFile, setImageFile] = useState<(string)[]>([]);
  const [MessageList, setMessageList] = useState<MessageListProps[]>([])
  const [filterMessageList, setFilterMessageList] = useState<MessageListProps[]>([])
  const [onActiveIndex, setOnActiveIndex] = useState<number>(1)
  const turnIcon = () => {
    setShowLeftIcon(!showLeftIcon);
    const leftSlider = LeftSliderRef.current;
    if (leftSlider) {
      leftSlider.classList.toggle("LeftSliderCollapsed", showLeftIcon);
      leftSlider.classList.toggle("LeftSliderTurn", !showLeftIcon);
    }
  };

  const sendMessage = () => {
    console.log(1111);

    const div = InputRef.current;
    if (div) {
      const childNodes = div.childNodes;
      for (let i = childNodes.length - 1; i >= 0; i--) {
        if (childNodes[i].nodeType === 3) { // 检查节点类型是否为文本节点
          div.removeChild(childNodes[i]);
         
        }
      }
      div.textContent = '';
      const images = div.querySelectorAll('img');
      console.log('images', images);

      for (let i = 0; i < images.length; i++) {
        images[i].remove();
      }
      div.contentEditable = 'true';
      console.log(div.contentEditable);
    }

    console.log('input', inputValue);

    setInputValue('')
    setImageFile([])
    console.log(MessageList);

    const curMessageList = JSON.parse(JSON.stringify(MessageList))
    curMessageList.map((message: MessageListProps) => {
      if (message.id === onActiveIndex) {
        message.messages.push({
          'message': inputValue,
          'imgUrls': imageFile,
          "avatar": 'https://randomuser.me/api/portraits/men/62.jpg',
          "avatarName": 'Win',
          "isOwn": true,
        })
      }
    })
    const curFilterMessageList = JSON.parse(JSON.stringify(filterMessageList))
    curFilterMessageList.map((message: MessageListProps) => {
      if (message.id === onActiveIndex) {
        message.messages.push({
          'message': inputValue,
          'imgUrls': imageFile,
          "avatar": 'https://randomuser.me/api/portraits/men/62.jpg',
          "avatarName": 'Win',
          "isOwn": true,
        })
      }
    })
    setMessageList(curMessageList)
    setFilterMessageList(curFilterMessageList)
  }
  useEffect(() => {
    setMessageList([{
      "name": "React18 Hooks 开发小组",
      "id": 1,
      "Img": "https://randomuser.me/api/portraits/men/72.jpg",
      'time': '19:01',
      "message": '那听起来不错',
      "infos": [' 2023年11月17日 早上9:00', ' Win 邀请了Tom进入了群聊'],
      "messages": [{
        "message": "今天天气真不错1",
        "imgUrls": ['https://randomuser.me/api/portraits/men/72.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/72.jpg',
        "avatarName": 'Jack'
      }, {
        "message": "要不要出去玩呢？",
        "imgUrls": ['https://randomuser.me/api/portraits/women/72.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/women/72.jpg',
        "avatarName": 'Mary'
      }, {
        "message": "我觉得相当不错！",
        "imgUrls": [],
        "avatar": 'https://randomuser.me/api/portraits/men/14.jpg',
        "avatarName": 'Tom'
      }, {
        "message": "出去散步怎么样？",
        "imgUrls": ['https://randomuser.me/api/portraits/men/62.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/62.jpg',
        "avatarName": 'Win',
        "isOwn": true
      }, {
        "message": "那听起来不错",
        "imgUrls": ['https://randomuser.me/api/portraits/men/72.jpg', 'https://randomuser.me/api/portraits/men/15.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/72.jpg',
        "avatarName": 'Jack'
      }],
    },
    {
      "name": "Vue开发小组",
      "id": 2,
      "Img": "https://randomuser.me/api/portraits/men/12.jpg",
      'time': '14:01',
      "message": 'VUEX',
      "infos": [' 2023年11月17日 早上9:00', ' Tom 邀请了Jack进入了群聊'],
      "messages": [{
        "message": "今天天气真不错2",
        "imgUrls": ['https://randomuser.me/api/portraits/women/1.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/women/1.jpg',
        "avatarName": 'Alice'
      }, {
        "message": "vue语法是怎样的？",
        "imgUrls": ['https://randomuser.me/api/portraits/men/22.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/22.jpg',
        "avatarName": 'Bob'
      }, {
        "message": "我觉得相当不错！",
        "imgUrls": [],
        "avatar": 'https://randomuser.me/api/portraits/men/14.jpg',
        "avatarName": 'Tom'
      }, {
        "message": "VUE2 VUE3",
        "imgUrls": ['https://randomuser.me/api/portraits/men/62.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/62.jpg',
        "avatarName": 'Win',
        "isOwn": true
      }, {
        "message": "那听起来不错",
        "imgUrls": ['https://randomuser.me/api/portraits/men/72.jpg', 'https://randomuser.me/api/portraits/men/15.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/72.jpg',
        "avatarName": 'Jack'
      }],
    }, {
      "name": "React18",
      "id": 3,
      "Img": "https://randomuser.me/api/portraits/women/67.jpg",
      'time': '11:11',
      "message": '那听起来不错',
      "infos": [' 2023年11月17日 早上9:00', ' Win 邀请了Tom进入了群聊'],
      "messages": [{
        "message": "今天天气真不错3",
        "imgUrls": ['https://randomuser.me/api/portraits/men/72.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/72.jpg',
        "avatarName": 'Jack'
      }, {
        "message": "要不要出去玩呢？",
        "imgUrls": ['https://randomuser.me/api/portraits/women/72.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/women/72.jpg',
        "avatarName": 'Mary'
      }, {
        "message": "我觉得相当不错！",
        "imgUrls": [],
        "avatar": 'https://randomuser.me/api/portraits/men/14.jpg',
        "avatarName": 'Tom'
      }, {
        "message": "出去散步怎么样？",
        "imgUrls": ['https://randomuser.me/api/portraits/men/62.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/62.jpg',
        "avatarName": 'Win',
        "isOwn": true
      }, {
        "message": "那听起来不错",
        "imgUrls": ['https://randomuser.me/api/portraits/men/72.jpg', 'https://randomuser.me/api/portraits/men/15.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/72.jpg',
        "avatarName": 'Jack'
      }],
    }, {
      "name": "开发小组",
      "id": 4,
      "Img": "https://randomuser.me/api/portraits/men/2.jpg",
      'time': '13:14',
      "message": '那听起来不错',
      "infos": [' 2023年11月17日 早上9:00', ' Win 邀请了Tom进入了群聊'],
      "messages": [{
        "message": "今天天气真不错4",
        "imgUrls": ['https://randomuser.me/api/portraits/men/72.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/72.jpg',
        "avatarName": 'Jack'
      }, {
        "message": "要不要出去玩呢？",
        "imgUrls": ['https://randomuser.me/api/portraits/women/72.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/women/72.jpg',
        "avatarName": 'Mary'
      }, {
        "message": "我觉得相当不错！",
        "imgUrls": [],
        "avatar": 'https://randomuser.me/api/portraits/men/14.jpg',
        "avatarName": 'Tom'
      }, {
        "message": "出去散步怎么样？",
        "imgUrls": ['https://randomuser.me/api/portraits/men/62.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/62.jpg',
        "avatarName": 'Win',
        "isOwn": true
      }, {
        "message": "那听起来不错",
        "imgUrls": ['https://randomuser.me/api/portraits/men/72.jpg', 'https://randomuser.me/api/portraits/men/15.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/72.jpg',
        "avatarName": 'Jack'
      }],
    }])
    setFilterMessageList([{
      "name": "React18 Hooks 开发小组",
      "id": 1,
      "Img": "https://randomuser.me/api/portraits/men/72.jpg",
      'time': '19:01',
      "message": '那听起来不错',
      "infos": [' 2023年11月17日 早上9:00', ' Win 邀请了Tom进入了群聊'],
      "messages": [{
        "message": "今天天气真不错1",
        "imgUrls": ['https://randomuser.me/api/portraits/men/72.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/72.jpg',
        "avatarName": 'Jack'
      }, {
        "message": "要不要出去玩呢？",
        "imgUrls": ['https://randomuser.me/api/portraits/women/72.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/women/72.jpg',
        "avatarName": 'Mary'
      }, {
        "message": "我觉得相当不错！",
        "imgUrls": [],
        "avatar": 'https://randomuser.me/api/portraits/men/14.jpg',
        "avatarName": 'Tom'
      }, {
        "message": "出去散步怎么样？",
        "imgUrls": ['https://randomuser.me/api/portraits/men/62.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/62.jpg',
        "avatarName": 'Win',
        "isOwn": true
      }, {
        "message": "那听起来不错",
        "imgUrls": ['https://randomuser.me/api/portraits/men/72.jpg', 'https://randomuser.me/api/portraits/men/15.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/72.jpg',
        "avatarName": 'Jack'
      }],
    },
    {
      "name": "Vue开发小组",
      "id": 2,
      "Img": "https://randomuser.me/api/portraits/men/12.jpg",
      'time': '14:01',
      "message": 'VUEX',
      "infos": [' 2023年11月17日 早上9:00', ' Tom 邀请了Jack进入了群聊'],
      "messages": [{
        "message": "今天天气真不错2",
        "imgUrls": ['https://randomuser.me/api/portraits/women/1.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/women/1.jpg',
        "avatarName": 'Alice'
      }, {
        "message": "vue语法是怎样的？",
        "imgUrls": ['https://randomuser.me/api/portraits/men/22.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/22.jpg',
        "avatarName": 'Bob'
      }, {
        "message": "我觉得相当不错！",
        "imgUrls": [],
        "avatar": 'https://randomuser.me/api/portraits/men/14.jpg',
        "avatarName": 'Tom'
      }, {
        "message": "VUE2 VUE3",
        "imgUrls": ['https://randomuser.me/api/portraits/men/62.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/62.jpg',
        "avatarName": 'Win',
        "isOwn": true
      }, {
        "message": "那听起来不错",
        "imgUrls": ['https://randomuser.me/api/portraits/men/72.jpg', 'https://randomuser.me/api/portraits/men/15.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/72.jpg',
        "avatarName": 'Jack'
      }],
    }, {
      "name": "React18",
      "id": 3,
      "Img": "https://randomuser.me/api/portraits/women/67.jpg",
      'time': '11:11',
      "message": '那听起来不错',
      "infos": [' 2023年11月17日 早上9:00', ' Win 邀请了Tom进入了群聊'],
      "messages": [{
        "message": "今天天气真不错3",
        "imgUrls": ['https://randomuser.me/api/portraits/men/72.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/72.jpg',
        "avatarName": 'Jack'
      }, {
        "message": "要不要出去玩呢？",
        "imgUrls": ['https://randomuser.me/api/portraits/women/72.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/women/72.jpg',
        "avatarName": 'Mary'
      }, {
        "message": "我觉得相当不错！",
        "imgUrls": [],
        "avatar": 'https://randomuser.me/api/portraits/men/14.jpg',
        "avatarName": 'Tom'
      }, {
        "message": "出去散步怎么样？",
        "imgUrls": ['https://randomuser.me/api/portraits/men/62.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/62.jpg',
        "avatarName": 'Win',
        "isOwn": true
      }, {
        "message": "那听起来不错",
        "imgUrls": ['https://randomuser.me/api/portraits/men/72.jpg', 'https://randomuser.me/api/portraits/men/15.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/72.jpg',
        "avatarName": 'Jack'
      }],
    }, {
      "name": "开发小组",
      "id": 4,
      "Img": "https://randomuser.me/api/portraits/men/2.jpg",
      'time': '13:14',
      "message": '那听起来不错',
      "infos": [' 2023年11月17日 早上9:00', ' Win 邀请了Tom进入了群聊'],
      "messages": [{
        "message": "今天天气真不错4",
        "imgUrls": ['https://randomuser.me/api/portraits/men/72.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/72.jpg',
        "avatarName": 'Jack'
      }, {
        "message": "要不要出去玩呢？",
        "imgUrls": ['https://randomuser.me/api/portraits/women/72.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/women/72.jpg',
        "avatarName": 'Mary'
      }, {
        "message": "我觉得相当不错！",
        "imgUrls": [],
        "avatar": 'https://randomuser.me/api/portraits/men/14.jpg',
        "avatarName": 'Tom'
      }, {
        "message": "出去散步怎么样？",
        "imgUrls": ['https://randomuser.me/api/portraits/men/62.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/62.jpg',
        "avatarName": 'Win',
        "isOwn": true
      }, {
        "message": "那听起来不错",
        "imgUrls": ['https://randomuser.me/api/portraits/men/72.jpg', 'https://randomuser.me/api/portraits/men/15.jpg'],
        "avatar": 'https://randomuser.me/api/portraits/men/72.jpg',
        "avatarName": 'Jack'
      }],
    }])
  }, [])
  useEffect(() => {
    const div = InputRef.current;
    const handleInput = () => {
      console.log(div?.textContent); // 输出当前div的内容
      setInputValue(div?.textContent as string);
    };



    div?.addEventListener("input", handleInput);
    div?.addEventListener("paste", (e) => {
      console.log('imageFile', imageFile);
      let file = null;
      const items = e.clipboardData?.items;
      if (items && items.length) {
        for (let i = 0; i < items.length; i++) {
          console.log(items[i]);

          if (items[i].type.indexOf("image") !== -1 || items[i].type.indexOf("text/plain") !== -1 || items[i].type.indexOf("image/png") !== -1) {


            file = items[i].getAsFile();
            console.log(file);
            break;
          }
        }
      }
      if (file) {
        const blob = URL.createObjectURL(file);
        setImageFile(imageFile => [...imageFile, blob]);
        // 此时获取到 file 文件对象，即可处理上传相关处理
      } else {
        // 如果粘贴的不是图像文件，则执行其他操作或忽略该事件
        // e.preventDefault();
        const html = e.clipboardData?.getData("text/html");
        if (html) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const images =  Array.from(doc.querySelectorAll("img"));
          const texts = Array.from(doc.querySelectorAll("text"));
          const text = texts.map(node => node.textContent).join('');
          const imageUrls = Array.from(images.map(node => node.getAttribute("src")));
          setInputValue(text);
          setImageFile(imageFile => [...imageFile, ...imageUrls] as string[]);

        }
      }
    });

    // div?.addEventListener("keydown", (e) => {
    //   console.log(e);

    //   if (e.key === "Enter") {
    //     console.log("Enter")
    //     sendMessage()
    //   }
    // });
    // 在组件卸载时移除事件监听器
    return () => {
      div?.removeEventListener("input", handleInput);
      div?.removeEventListener("paste", handleInput);
      // div?.removeEventListener("keydown", handleInput);
    };
  }, []); // 依赖数组为空，表示这个effect只在组件挂载和卸载时运行

  // useEffect(() => {
  //   const div = InputRef.current;
  //   const HandleKeyDown = (e: { key: string; }) => {
  //     console.log(e);

  //     if (e.key === "Enter") {
  //       console.log("Enter")
  //       sendMessage()
  //     }
  //   }


  //   div?.addEventListener("keydown", HandleKeyDown);
  //   return () => {
  //     div?.removeEventListener("keydown",HandleKeyDown);
  //   };
  // }, [])


  const filteredMessages = useMemo(() => {
    return (MessageList.filter(message => message?.id === onActiveIndex))[0];
  }, [MessageList, onActiveIndex]);

  return (
    <div className="flex">
      <div ref={LeftSliderRef} className="w-[400px]">
        <div className="w-full h-[100vh] border-solid  border-r flex flex-col items-center">
          <div className="w-full mt-2 px-4">
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) => searchMessage(e)}
              size="large"
              suffix={<SearchOutlined />}
              placeholder="搜索"
              allowClear
            />
          </div>

          <div className="flex flex-col w-full mt-6">
            {filterMessageList.map(item => (
              <div key={item.id} className="h-[80px] flex items-center px-4 border-b  hover:bg-[#efefef]" onClick={() => setOnActiveIndex(item.id)}>
                <img
                  className="max-h-[60px]"
                  src={item.Img}
                  alt=""
                />
                <div className="mx-4 w-full">
                  <div className="font-bold truncate">{item.name}</div>
                  <div className="truncate text-[#aeaeae]">
                    {item.message}
                  </div>
                </div>
                <div className="w-[40px]">
                  <div>{item.time}</div>
                  <div className="h-[24px]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 h-[100vh]  relative">
        {showLeftIcon ? (
          <LeftCircleOutlined
            onClick={turnIcon}
            style={{
              fontSize: "30px",
              position: "absolute",
              left: "-15px",
              top: "50%",
            }}
          />
        ) : (
          <RightCircleOutlined
            onClick={turnIcon}
            style={{
              fontSize: "30px",
              position: "absolute",
              left: "-15px",
              top: "50%",
            }}
          />
        )}

        <div className="h-full flex flex-col">
          <div className="flex justify-between mt-2">
            <p className="text-2xl mx-4 mt-4">{filteredMessages?.name}</p>
            <div className="flex">
              <SettingOutlined
                style={{ fontSize: "24px", marginRight: "16px" }}
              />
              <EllipsisOutlined
                style={{ fontSize: "24px", marginRight: "16px" }}
              />
            </div>
          </div>
          <div className=" h-[calc(100vh-60px)] flex flex-col">
            <div className="hide-scrollbar  overflow-auto  flex-auto min-h-[200px] mb-4">
              {filteredMessages?.infos?.map((info: string) => (
                <p key={info} className="text-center text-[#aeaeae] p-4 ">
                  {info}
                </p>
              ))}
              {filteredMessages?.messages?.map((message: MessageProps) => (
                <div key={uuidv4()} className={`flex w-[90%] m-[5%] ${message?.isOwn ? 'flex-row-reverse' : 'pr-[70px]'}`}>
                  <img className="max-h-[60px] ml-4"
                    src={message.avatar}
                    alt="" />
                  <div className='ml-4'>
                    <p className={`text-[#aeaeae] ${message?.isOwn ? 'text-right pr-[18px]' : ''}`}>{message.avatarName}</p>
                    <div className={`userMessage ${message?.isOwn ? 'userMessageRight' : 'userMessageLeft'}`}>
                      {message.message}
                      {message.imgUrls.length > 0 ? <Image.PreviewGroup>
                        {message.imgUrls.map((img: string) => (
                          <Image height={160} className='p-2' key={img} src={img} />
                          // <img key={img} className='w-[150px] h-[150px] m-4' src={img} alt="" />
                        ))}
                      </Image.PreviewGroup> : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mb-6 relative">
              <div
                className="contentEditable break-all max-w-[90%] flex flex-wrap hide-scrollbar max-h-[600px] overflow-auto whitespace-pre-wrap w-[90%] border border-solid rounded-2xl px-4 leading-[60px] text-[20px] shadow-lg shadow-slate-400"
                suppressContentEditableWarning
                contentEditable={true}
                ref={InputRef}
              >


              </div>
              <div className="buttons flex absolute bottom-1 bg-white h-[56px] rounded-lg right-[6%]">
                <PlusCircleOutlined style={{ fontSize: "24px", marginRight: "16px" }} />
                <SendOutlined style={{ fontSize: "24px", marginRight: "16px" }} onClick={sendMessage} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
