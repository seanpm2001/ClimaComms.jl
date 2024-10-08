var documenterSearchIndex = {"docs":
[{"location":"#ClimaComms","page":"Home","title":"ClimaComms","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = ClimaComms","category":"page"},{"location":"","page":"Home","title":"Home","text":"ClimaComms","category":"page"},{"location":"#ClimaComms.ClimaComms","page":"Home","title":"ClimaComms.ClimaComms","text":"ClimaComms\n\nAbstracts the communications interface for the various CliMA components in order to:\n\nenable the use of different backends as transports (MPI, SharedArrays, etc.), and\ntransparently support single or double buffering for GPUs, depending on whether the transport has the ability to access GPU memory.\n\nUse one of the ClimaComms backends, currently:\n\nClimaCommsMPI uses MPI-2 asynchronous primitives through MPI.jl and supports a single buffer if the MPI implementation is CUDA-aware.\nClimaCommsSA uses Julia's Distributed capability and SharedArrays.jl for within-node communication.\n\n\n\n\n\n","category":"module"},{"location":"#Contexts","page":"Home","title":"Contexts","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ClimaComms.AbstractCommsContext\nClimaComms.AbstractGraphContext","category":"page"},{"location":"#ClimaComms.AbstractCommsContext","page":"Home","title":"ClimaComms.AbstractCommsContext","text":"AbstractCommsContext\n\nThe base type for a communications context. Each backend defines a concrete subtype of this.\n\n\n\n\n\n","category":"type"},{"location":"#ClimaComms.AbstractGraphContext","page":"Home","title":"ClimaComms.AbstractGraphContext","text":"AbstractGraphContext\n\nA context for communicating between processes in a graph.\n\n\n\n\n\n","category":"type"},{"location":"#Devices","page":"Home","title":"Devices","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ClimaComms.AbstractDevice\nClimaComms.CPU\nClimaComms.CUDA","category":"page"},{"location":"#ClimaComms.AbstractDevice","page":"Home","title":"ClimaComms.AbstractDevice","text":"AbstractDevice\n\nThe base type for a device.\n\n\n\n\n\n","category":"type"},{"location":"#ClimaComms.CPU","page":"Home","title":"ClimaComms.CPU","text":"CPU()\n\nRun code on a CPU device\n\n\n\n\n\n","category":"type"},{"location":"#ClimaComms.CUDA","page":"Home","title":"ClimaComms.CUDA","text":"CUDA()\n\nUse NVIDIA GPU accelarator\n\n\n\n\n\n","category":"type"},{"location":"#Communication-interface","page":"Home","title":"Communication interface","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ClimaComms.init\nClimaComms.mypid\nClimaComms.iamroot\nClimaComms.nprocs\nClimaComms.barrier\nClimaComms.reduce\nClimaComms.allreduce\nClimaComms.allreduce!\nClimaComms.abort\nClimaComms.graph_context\nClimaComms.start\nClimaComms.progress\nClimaComms.finish","category":"page"},{"location":"#ClimaComms.init","page":"Home","title":"ClimaComms.init","text":"(pid, nprocs) = init(ctx::AbstractCommsContext)\n\nPerform any necessary initialization for the specified backend. Return a tuple of the processor ID and the number of participating processors.\n\n\n\n\n\n","category":"function"},{"location":"#ClimaComms.mypid","page":"Home","title":"ClimaComms.mypid","text":"mypid(ctx::AbstractCommsContext)\n\nReturn the processor ID.\n\n\n\n\n\n","category":"function"},{"location":"#ClimaComms.iamroot","page":"Home","title":"ClimaComms.iamroot","text":"iamroot(ctx::AbstractCommsContext)\n\nReturn true if the calling processor is the root processor.\n\n\n\n\n\n","category":"function"},{"location":"#ClimaComms.nprocs","page":"Home","title":"ClimaComms.nprocs","text":"nprocs(ctx::AbstractCommsContext)\n\nReturn the number of participating processors.\n\n\n\n\n\n","category":"function"},{"location":"#ClimaComms.barrier","page":"Home","title":"ClimaComms.barrier","text":"barrier(ctx::CC) where {CC <: AbstractCommsContext}\n\nPerform a global synchronization across all participating processors.\n\n\n\n\n\n","category":"function"},{"location":"#ClimaComms.reduce","page":"Home","title":"ClimaComms.reduce","text":"reduce(ctx::CC, val, op) where {CC <: AbstractCommsContext}\n\nPerform a reduction across all participating processors, using op as the reduction operator and val as this rank's reduction value. Return the result to the first processor only.\n\n\n\n\n\n","category":"function"},{"location":"#ClimaComms.allreduce","page":"Home","title":"ClimaComms.allreduce","text":"allreduce(ctx::CC, sendbuf, op)\n\nPerforms elementwise reduction using the operator op on the buffer sendbuf, allocating a new array for the result. sendbuf can also be a scalar, in which case recvbuf will be a value of the same type.\n\n\n\n\n\n","category":"function"},{"location":"#ClimaComms.allreduce!","page":"Home","title":"ClimaComms.allreduce!","text":"allreduce!(ctx::CC, sendbuf, recvbuf, op)\nallreduce!(ctx::CC, sendrecvbuf, op)\n\nPerforms elementwise reduction using the operator op on the buffer sendbuf, storing the result in the recvbuf of all processes in the group. Allreduce! is equivalent to a Reduce! operation followed by a Bcast!, but can lead to better performance. If only one sendrecvbuf buffer is provided, then the operation is performed in-place.\n\n\n\n\n\n","category":"function"},{"location":"#ClimaComms.abort","page":"Home","title":"ClimaComms.abort","text":"abort(ctx::CC, status::Int) where {CC <: AbstractCommsContext}\n\nTerminate the caller and all participating processors with the specified status.\n\n\n\n\n\n","category":"function"},{"location":"#ClimaComms.graph_context","page":"Home","title":"ClimaComms.graph_context","text":"graph_context(context::AbstractCommsContext, sendarray, sendpids, sendlengths, recvarray, recvpids, recvlengths)\n\nConstruct a communication context for exchanging neighbor data via a graph.\n\nArguments:\n\ncontext: the communication context on which to construct the graph context.\nsendarray: array containing data to send\nsendpids: list of processor IDs to send\nsendlengths: list of lengths of data to send to each process ID\nrecvarray: array to receive data into\nrecvpids: list of processor IDs to receive from\nrecvlengths: list of lengths of data to receive from each process ID\n\nThis should return an AbstractGraphContext object.\n\n\n\n\n\n","category":"function"},{"location":"#ClimaComms.start","page":"Home","title":"ClimaComms.start","text":"start(ctx::AbstractGraphContext)\n\nInitiate graph data exchange.\n\n\n\n\n\n","category":"function"},{"location":"#ClimaComms.progress","page":"Home","title":"ClimaComms.progress","text":"progress(ctx::AbstractGraphContext)\n\nDrive communication. Call after start to ensure that communication proceeds asynchronously.\n\n\n\n\n\n","category":"function"},{"location":"#ClimaComms.finish","page":"Home","title":"ClimaComms.finish","text":"finish(ctx::AbstractGraphContext)\n\nComplete the communications step begun by start(). After this returns, data received from all neighbors will be available in the stage areas of each neighbor's receive buffer.\n\n\n\n\n\n","category":"function"},{"location":"#Contexts-2","page":"Home","title":"Contexts","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ClimaComms.SingletonCommsContext","category":"page"},{"location":"#ClimaComms.SingletonCommsContext","page":"Home","title":"ClimaComms.SingletonCommsContext","text":"SingletonCommsContext()\nSingletonCommsContext(device)\n\nA singleton communications context, used for single-process runs. ClimaComms.CPU and ClimaComms.CUDA device options are currently supported.\n\n\n\n\n\n","category":"type"}]
}
